import { Injectable, NotFoundException, ConflictException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';
import { CreateRolDto } from './create-rol.dto';
import { UpdateRolDto } from './update-rol.dto';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Usuario } from '../users/user.entity';
import { Asignacion } from '../asignacion/asignacion.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly repo: Repository<Rol>,
    @InjectRepository(Organizacion)
    private readonly orgRepo: Repository<Organizacion>,
    @InjectRepository(Proyecto)
    private readonly proyectoRepo: Repository<Proyecto>,
    @InjectRepository(Asignacion)
    private readonly asignacionRepo: Repository<Asignacion>,
  ) {}

  async create(dto: CreateRolDto, user: Usuario) {
    if (!dto.nombre || !dto.nombre.trim()) {
      throw new BadRequestException('El nombre del rol es requerido');
    }

    // Validar tipo_rol y campos relacionados
    this.validateTipoRol(dto);

    // Validar permisos según tipo de rol
    await this.validatePermissions(dto, user);

    // Verificar si ya existe un rol con el mismo nombre en el mismo contexto
    const existingRol = await this.findExistingRol(dto);
    if (existingRol) {
      throw new ConflictException(`Ya existe un rol con el nombre "${dto.nombre.trim()}" en este contexto`);
    }

    const rol = this.repo.create({
      nombre: dto.nombre.trim(),
      descripcion: dto.descripcion?.trim() || '',
      tipo_rol: dto.tipo_rol,
      id_organizacion: dto.tipo_rol === 'organizacion' ? dto.id_organizacion : null,
      id_proyecto: dto.tipo_rol === 'proyecto' ? dto.id_proyecto : null,
      activo: dto.activo !== undefined ? dto.activo : true,
      creado_por: user.id_usuario,
    });

    return this.repo.save(rol);
  }

  async findAll(filters?: { tipo_rol?: string; id_organizacion?: number; id_proyecto?: number }) {
    const where: any = {};
    
    if (filters?.tipo_rol) {
      where.tipo_rol = filters.tipo_rol;
    }
    if (filters?.id_organizacion) {
      where.id_organizacion = filters.id_organizacion;
    }
    if (filters?.id_proyecto) {
      where.id_proyecto = filters.id_proyecto;
    }

    return this.repo.find({
      where,
      order: { nombre: 'ASC' },
      relations: ['organizacion', 'proyecto', 'creador']
    });
  }

  async findSystemRoles() {
    return this.repo.find({
      where: { tipo_rol: 'sistema', activo: true },
      order: { nombre: 'ASC' }
    });
  }

  async findByOrganization(id_organizacion: number) {
    // Roles del sistema + roles de la organización
    return this.repo.find({
      where: [
        { tipo_rol: 'sistema', activo: true },
        { tipo_rol: 'organizacion', id_organizacion, activo: true }
      ],
      order: { tipo_rol: 'ASC', nombre: 'ASC' },
      relations: ['organizacion']
    });
  }

  async findByProject(id_proyecto: number) {
    // Obtener el proyecto para saber su organización
    const proyecto = await this.proyectoRepo.findOne({
      where: { id_proyecto },
      relations: ['organizacion']
    });

    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id_proyecto} no encontrado`);
    }

    // Roles del sistema + roles de la organización + roles del proyecto
    return this.repo.find({
      where: [
        { tipo_rol: 'sistema', activo: true },
        { tipo_rol: 'organizacion', id_organizacion: proyecto.id_organizacion, activo: true },
        { tipo_rol: 'proyecto', id_proyecto, activo: true }
      ],
      order: { tipo_rol: 'ASC', nombre: 'ASC' },
      relations: ['organizacion', 'proyecto']
    });
  }

  async findOne(id: number) {
    const rol = await this.repo.findOne({ 
      where: { id_rol: id },
      relations: ['organizacion', 'proyecto', 'creador']
    });
    
    if (!rol) {
      throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    }

    return rol;
  }

  async update(id: number, dto: UpdateRolDto, user: Usuario) {
    const rol = await this.findOne(id);

    // No permitir modificar roles del sistema (excepto admin)
    if (rol.tipo_rol === 'sistema' && user.tipo_usuario !== 'admin') {
      throw new ForbiddenException('No se pueden modificar roles del sistema');
    }

    // Validar permisos para modificar
    await this.validateUpdatePermissions(rol, user);

    // Si se está actualizando el nombre, verificar que no exista otro rol con ese nombre en el mismo contexto
    if (dto.nombre && dto.nombre.trim() !== rol.nombre) {
      if (!dto.nombre.trim()) {
        throw new BadRequestException('El nombre del rol no puede estar vacío');
      }

      const existingRol = await this.findExistingRol({
        nombre: dto.nombre,
        tipo_rol: rol.tipo_rol,
        id_organizacion: rol.id_organizacion,
        id_proyecto: rol.id_proyecto
      } as CreateRolDto);

      if (existingRol && existingRol.id_rol !== id) {
        throw new ConflictException(`Ya existe un rol con el nombre "${dto.nombre.trim()}" en este contexto`);
      }
    }

    // Actualizar campos
    if (dto.nombre !== undefined) {
      rol.nombre = dto.nombre.trim();
    }
    if (dto.descripcion !== undefined) {
      rol.descripcion = dto.descripcion.trim();
    }
    if (dto.activo !== undefined) {
      rol.activo = dto.activo;
    }

    return this.repo.save(rol);
  }

  async remove(id: number, user: Usuario) {
    const rol = await this.findOne(id);

    // No permitir eliminar roles del sistema
    if (rol.tipo_rol === 'sistema') {
      throw new ForbiddenException('No se pueden eliminar roles del sistema');
    }

    // Validar permisos para eliminar
    await this.validateDeletePermissions(rol, user);

    // Verificar que el rol no esté en uso
    const asignaciones = await this.asignacionRepo.find({
      where: { id_rol: id }
    });

    if (asignaciones.length > 0) {
      throw new ConflictException(`No se puede eliminar el rol porque está siendo usado en ${asignaciones.length} asignación(es)`);
    }

    await this.repo.remove(rol);
    return { message: 'Rol eliminado correctamente' };
  }

  // Métodos privados de validación
  private validateTipoRol(dto: CreateRolDto) {
    if (dto.tipo_rol === 'sistema' && (dto.id_organizacion || dto.id_proyecto)) {
      throw new BadRequestException('Los roles del sistema no pueden tener id_organizacion ni id_proyecto');
    }

    if (dto.tipo_rol === 'organizacion') {
      if (!dto.id_organizacion) {
        throw new BadRequestException('Los roles de organización requieren id_organizacion');
      }
      if (dto.id_proyecto) {
        throw new BadRequestException('Los roles de organización no pueden tener id_proyecto');
      }
    }

    if (dto.tipo_rol === 'proyecto') {
      if (!dto.id_proyecto) {
        throw new BadRequestException('Los roles de proyecto requieren id_proyecto');
      }
      if (dto.id_organizacion) {
        throw new BadRequestException('Los roles de proyecto no pueden tener id_organizacion');
      }
    }
  }

  private async validatePermissions(dto: CreateRolDto, user: Usuario) {
    // Admin puede crear cualquier tipo de rol
    if (user.tipo_usuario === 'admin') {
      return;
    }

    // Organización solo puede crear roles de organización y proyecto
    if (user.tipo_usuario === 'organizacion') {
      if (dto.tipo_rol === 'sistema') {
        throw new ForbiddenException('Solo los administradores pueden crear roles del sistema');
      }

      // Validar que la organización es propietaria
      if (dto.tipo_rol === 'organizacion') {
        const org = await this.orgRepo.findOne({ where: { id_organizacion: dto.id_organizacion, id_usuario: user.id_usuario } });
        if (!org) {
          throw new ForbiddenException('No tienes permiso para crear roles para esta organización');
        }
      }

      if (dto.tipo_rol === 'proyecto') {
        const proyecto = await this.proyectoRepo.findOne({ 
          where: { id_proyecto: dto.id_proyecto },
          relations: ['organizacion']
        });
        if (!proyecto || proyecto.organizacion.id_usuario !== user.id_usuario) {
          throw new ForbiddenException('No tienes permiso para crear roles para este proyecto');
        }
      }
    } else {
      throw new ForbiddenException('Solo administradores y organizaciones pueden crear roles');
    }
  }

  private async validateUpdatePermissions(rol: Rol, user: Usuario) {
    if (user.tipo_usuario === 'admin') {
      return;
    }

    if (user.tipo_usuario === 'organizacion') {
      if (rol.tipo_rol === 'organizacion' && rol.id_organizacion) {
        const org = await this.orgRepo.findOne({ where: { id_organizacion: rol.id_organizacion, id_usuario: user.id_usuario } });
        if (!org) {
          throw new ForbiddenException('No tienes permiso para modificar este rol');
        }
      } else if (rol.tipo_rol === 'proyecto' && rol.id_proyecto) {
        const proyecto = await this.proyectoRepo.findOne({ 
          where: { id_proyecto: rol.id_proyecto },
          relations: ['organizacion']
        });
        if (!proyecto || proyecto.organizacion.id_usuario !== user.id_usuario) {
          throw new ForbiddenException('No tienes permiso para modificar este rol');
        }
      }
    } else {
      throw new ForbiddenException('No tienes permiso para modificar roles');
    }
  }

  private async validateDeletePermissions(rol: Rol, user: Usuario) {
    if (user.tipo_usuario === 'admin') {
      return;
    }

    if (user.tipo_usuario === 'organizacion') {
      if (rol.tipo_rol === 'organizacion' && rol.id_organizacion) {
        const org = await this.orgRepo.findOne({ where: { id_organizacion: rol.id_organizacion, id_usuario: user.id_usuario } });
        if (!org) {
          throw new ForbiddenException('No tienes permiso para eliminar este rol');
        }
      } else if (rol.tipo_rol === 'proyecto' && rol.id_proyecto) {
        const proyecto = await this.proyectoRepo.findOne({ 
          where: { id_proyecto: rol.id_proyecto },
          relations: ['organizacion']
        });
        if (!proyecto || proyecto.organizacion.id_usuario !== user.id_usuario) {
          throw new ForbiddenException('No tienes permiso para eliminar este rol');
        }
      }
    } else {
      throw new ForbiddenException('No tienes permiso para eliminar roles');
    }
  }

  private async findExistingRol(dto: CreateRolDto): Promise<Rol | null> {
    const where: any = {
      nombre: dto.nombre.trim(),
      tipo_rol: dto.tipo_rol
    };

    if (dto.tipo_rol === 'organizacion') {
      where.id_organizacion = dto.id_organizacion;
    } else if (dto.tipo_rol === 'proyecto') {
      where.id_proyecto = dto.id_proyecto;
    }

    return this.repo.findOne({ where });
  }
}
