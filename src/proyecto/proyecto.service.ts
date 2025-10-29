import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
import { Usuario } from '../users/user.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Fase } from '../fase/fase.entity';
import { Tarea } from '../tarea/tarea.entity';
import { CreateFaseDto } from '../fase/create-fase.dto';
import { CreateTareaDto } from '../tarea/create-tarea.dto';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly repo: Repository<Proyecto>,
    @InjectRepository(Organizacion)
    private readonly orgRepo: Repository<Organizacion>,
    @InjectRepository(Fase)
    private readonly faseRepo: Repository<Fase>,
    @InjectRepository(Tarea)
    private readonly tareaRepo: Repository<Tarea>,
  ) {}

  async create(dto: CreateProyectoDto, user: Usuario) {
    // Validar campos requeridos
    if (!dto.nombre || dto.nombre.trim() === '') {
      throw new Error('El nombre del proyecto es requerido');
    }
    if (!dto.descripcion || dto.descripcion.trim() === '') {
      throw new Error('La descripción del proyecto es requerida');
    }
    if (!dto.objetivo || dto.objetivo.trim() === '') {
      throw new Error('El objetivo del proyecto es requerido');
    }
    if (!dto.ubicacion || dto.ubicacion.trim() === '') {
      throw new Error('La ubicación del proyecto es requerida');
    }
    if (!dto.fecha_inicio) {
      throw new Error('La fecha de inicio es requerida');
    }
    if (!dto.fecha_fin) {
      throw new Error('La fecha de fin es requerida');
    }

    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
    if (!organizacion) {
      throw new NotFoundException('Organizacion no encontrada para el usuario');
    }
    
    const proyecto = this.repo.create({ 
      ...dto, 
      id_organizacion: organizacion.id_organizacion,
      nombre: dto.nombre.trim(),
      descripcion: dto.descripcion.trim(),
      objetivo: dto.objetivo.trim(),
      ubicacion: dto.ubicacion.trim()
    });
    
    return this.repo.save(proyecto);
  }

  // --- MÉTODO findAll() CORREGIDO ---
  async findAll(user: Usuario) {
    // Si el usuario es un admin, puede ver todos los proyectos
    if (user.tipo_usuario === 'admin') {
      return this.repo.find({ 
        relations: ['organizacion', 'estado', 'fases', 'fases.tareas'] 
      });
    }

    // Si el usuario es una organización, busca solo sus proyectos
    if (user.tipo_usuario === 'organizacion') {
      const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });

      if (!organizacion) {
        // Si no se encuentra una organización para este usuario, no devuelve proyectos.
        return [];
      }

      return this.repo.find({
        where: { id_organizacion: organizacion.id_organizacion },
        relations: ['organizacion', 'estado', 'fases', 'fases.tareas'],
      });
    }

    // Si es un voluntario, por ahora no devolvemos nada.
    // Más adelante puedes implementar la lógica para que vea los proyectos en los que participa.
    return [];
  }

  async findOne(id: number) {
    const proyecto = await this.repo.findOne({
      where: { id_proyecto: id },
      relations: ['organizacion', 'estado', 'fases', 'fases.tareas'],
    });
    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id} no encontrado`);
    }
    return proyecto;
  }

  async update(id: number, dto: UpdateProyectoDto, user: Usuario) {
    const proyecto = await this.findOne(id);
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });

    if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso para actualizar este proyecto.');
    }

    this.repo.merge(proyecto, dto);
    return this.repo.save(proyecto);
  }

  async remove(id: number, user: Usuario) {
    const proyecto = await this.findOne(id);
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });

    if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso para eliminar este proyecto.');
    }
    return this.repo.remove(proyecto);
  }

  // --- MÉTODOS PARA GESTIONAR FASES ---
  async addFase(proyectoId: number, dto: CreateFaseDto, user: Usuario) {
    const proyecto = await this.findOne(proyectoId);
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });

    if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso para agregar fases a este proyecto.');
    }

    const fase = this.faseRepo.create({
      ...dto,
      id_proyecto: proyectoId,
    });

    const savedFase = await this.faseRepo.save(fase);
    return this.findOne(proyectoId); // Retorna el proyecto completo con las fases
  }

  async updateFase(proyectoId: number, faseId: number, dto: Partial<CreateFaseDto>, user: Usuario) {
    const proyecto = await this.findOne(proyectoId);
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });

    if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso para actualizar fases de este proyecto.');
    }

    const fase = await this.faseRepo.findOne({
      where: { id_fase: faseId, id_proyecto: proyectoId },
    });

    if (!fase) {
      throw new NotFoundException(`Fase con ID ${faseId} no encontrada en el proyecto ${proyectoId}`);
    }

    this.faseRepo.merge(fase, dto);
    await this.faseRepo.save(fase);
    return this.findOne(proyectoId);
  }

  async removeFase(proyectoId: number, faseId: number, user: Usuario) {
    const proyecto = await this.findOne(proyectoId);
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });

    if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso para eliminar fases de este proyecto.');
    }

    const fase = await this.faseRepo.findOne({
      where: { id_fase: faseId, id_proyecto: proyectoId },
    });

    if (!fase) {
      throw new NotFoundException(`Fase con ID ${faseId} no encontrada en el proyecto ${proyectoId}`);
    }

    await this.faseRepo.remove(fase);
    return this.findOne(proyectoId);
  }

  // --- MÉTODOS PARA GESTIONAR TAREAS ---
  async addTarea(proyectoId: number, dto: CreateTareaDto, user: Usuario) {
    const proyecto = await this.findOne(proyectoId);
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });

    if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso para agregar tareas a este proyecto.');
    }

    // Verificar que la fase pertenece al proyecto
    const fase = await this.faseRepo.findOne({
      where: { id_fase: dto.id_fase, id_proyecto: proyectoId },
    });

    if (!fase) {
      throw new NotFoundException(`Fase con ID ${dto.id_fase} no encontrada en el proyecto ${proyectoId}`);
    }

    const tarea = this.tareaRepo.create(dto);
    await this.tareaRepo.save(tarea);
    return this.findOne(proyectoId);
  }

  async updateTarea(proyectoId: number, tareaId: number, dto: Partial<CreateTareaDto>, user: Usuario) {
    const proyecto = await this.findOne(proyectoId);
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });

    if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso para actualizar tareas de este proyecto.');
    }

    const tarea = await this.tareaRepo.findOne({
      where: { id_tarea: tareaId },
      relations: ['fase'],
    });

    if (!tarea || tarea.fase.id_proyecto !== proyectoId) {
      throw new NotFoundException(`Tarea con ID ${tareaId} no encontrada en el proyecto ${proyectoId}`);
    }

    this.tareaRepo.merge(tarea, dto);
    await this.tareaRepo.save(tarea);
    return this.findOne(proyectoId);
  }

  async removeTarea(proyectoId: number, tareaId: number, user: Usuario) {
    const proyecto = await this.findOne(proyectoId);
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });

    if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso para eliminar tareas de este proyecto.');
    }

    const tarea = await this.tareaRepo.findOne({
      where: { id_tarea: tareaId },
      relations: ['fase'],
    });

    if (!tarea || tarea.fase.id_proyecto !== proyectoId) {
      throw new NotFoundException(`Tarea con ID ${tareaId} no encontrada en el proyecto ${proyectoId}`);
    }

    await this.tareaRepo.remove(tarea);
    return this.findOne(proyectoId);
  }
}