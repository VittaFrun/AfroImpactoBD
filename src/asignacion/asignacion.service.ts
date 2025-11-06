import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignacion } from './asignacion.entity';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { Usuario } from '../users/user.entity';
import { Tarea } from '../tarea/tarea.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Rol } from '../rol/rol.entity';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private readonly repo: Repository<Asignacion>,
    @InjectRepository(Tarea)
    private readonly tareaRepo: Repository<Tarea>,
    @InjectRepository(Proyecto)
    private readonly proyectoRepo: Repository<Proyecto>,
    @InjectRepository(Organizacion)
    private readonly orgRepo: Repository<Organizacion>,
    @InjectRepository(Voluntario)
    private readonly voluntarioRepo: Repository<Voluntario>,
    @InjectRepository(Rol)
    private readonly rolRepo: Repository<Rol>,
  ) {}

  async create(dto: CreateAsignacionDto, user: Usuario) {
    const tarea = await this.tareaRepo.findOne({ 
      where: { id_tarea: dto.id_tarea }, 
      relations: ['fase', 'fase.proyecto'] 
    });
    if (!tarea) {
      throw new NotFoundException(`Tarea con ID ${dto.id_tarea} no encontrada`);
    }

    const proyecto = await this.proyectoRepo.findOne({
      where: { id_proyecto: tarea.fase.id_proyecto },
      relations: ['organizacion']
    });

    if (!proyecto) {
      throw new NotFoundException(`Proyecto no encontrado`);
    }

    await this.checkOrganizacionOwnership(proyecto.id_proyecto, user);

    // Validar que el rol pertenece al proyecto
    await this.validateRolForProject(dto.id_rol, proyecto.id_proyecto);

    const asignacion = this.repo.create({
      id_tarea: dto.id_tarea,
      id_voluntario: dto.id_voluntario,
      id_rol: dto.id_rol
    });

    const saved = await this.repo.save(asignacion);
    
    // Retornar con relaciones
    return this.repo.findOne({
      where: { id_asignacion: saved.id_asignacion },
      relations: ['rol', 'voluntario', 'tarea']
    });
  }

  async validateRolForProject(id_rol: number, id_proyecto: number) {
    const rol = await this.rolRepo.findOne({ where: { id_rol } });
    
    if (!rol) {
      throw new NotFoundException(`Rol con ID ${id_rol} no encontrado`);
    }

    if (!rol.activo) {
      throw new BadRequestException('El rol no está activo');
    }

    const proyecto = await this.proyectoRepo.findOne({
      where: { id_proyecto },
      relations: ['organizacion']
    });

    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id_proyecto} no encontrado`);
    }

    // El rol debe ser: sistema, de la organización del proyecto, o del proyecto mismo
    const isValid = 
      rol.tipo_rol === 'sistema' ||
      (rol.tipo_rol === 'organizacion' && rol.id_organizacion === proyecto.id_organizacion) ||
      (rol.tipo_rol === 'proyecto' && rol.id_proyecto === id_proyecto);

    if (!isValid) {
      throw new BadRequestException('El rol seleccionado no está disponible para este proyecto');
    }

    return true;
  }

  findAllByTarea(idTarea: number) {
    return this.repo.find({ 
      where: { id_tarea: idTarea },
      relations: ['rol', 'voluntario', 'tarea']
    });
  }

  async findTasksByVoluntario(id_usuario: number) {
    const voluntario = await this.voluntarioRepo.findOne({ where: { id_usuario } });
    if (!voluntario) {
      throw new NotFoundException('Voluntario no encontrado');
    }
    return this.repo.find({ 
      where: { id_voluntario: voluntario.id_voluntario }, 
      relations: ['tarea', 'rol'] 
    });
  }

  async findAsignacionesByProyecto(id_proyecto: number, id_usuario: number) {
    const voluntario = await this.voluntarioRepo.findOne({ where: { id_usuario } });
    if (!voluntario) {
      throw new NotFoundException('Voluntario no encontrado');
    }

    // Obtener todas las asignaciones del voluntario
    const asignaciones = await this.repo.find({
      where: { id_voluntario: voluntario.id_voluntario },
      relations: ['tarea', 'tarea.fase', 'tarea.estado', 'rol']
    });

    // Filtrar solo las que pertenecen al proyecto
    const asignacionesProyecto = asignaciones.filter(a => 
      a.tarea?.fase?.id_proyecto === id_proyecto
    );

    return asignacionesProyecto;
  }

  async remove(id: number, user: Usuario) {
    const asignacion = await this.repo.findOne({ 
      where: { id_asignacion: id }, 
      relations: ['tarea', 'tarea.fase', 'rol'] 
    });
    if (!asignacion) {
      throw new NotFoundException(`Asignacion con ID ${id} no encontrada`);
    }
    await this.checkOrganizacionOwnership(asignacion.tarea.fase.id_proyecto, user);
    return this.repo.remove(asignacion);
  }

  private async checkOrganizacionOwnership(id_proyecto: number, user: Usuario) {
    if (user.tipo_usuario === 'admin') return;

    const proyecto = await this.proyectoRepo.findOne({ where: { id_proyecto } });
    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id_proyecto} no encontrado`);
    }
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
    if (!organizacion || proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso sobre este proyecto.');
    }
  }
}
