import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SolicitudInscripcion } from './solicitud-inscripcion.entity';
import { CreateSolicitudInscripcionDto } from './create-solicitud-inscripcion.dto';
import { UpdateSolicitudInscripcionDto } from './update-solicitud-inscripcion.dto';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Voluntario } from '../voluntario/voluntario.entity';

@Injectable()
export class SolicitudInscripcionService {
  constructor(
    @InjectRepository(SolicitudInscripcion)
    private readonly repo: Repository<SolicitudInscripcion>,
    @InjectRepository(Proyecto)
    private readonly proyectoRepo: Repository<Proyecto>,
    @InjectRepository(Voluntario)
    private readonly voluntarioRepo: Repository<Voluntario>,
  ) {}

  async create(dto: CreateSolicitudInscripcionDto) {
    // Verificar que el proyecto existe
    const proyecto = await this.proyectoRepo.findOne({
      where: { id_proyecto: dto.id_proyecto }
    });

    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${dto.id_proyecto} no encontrado`);
    }

    // Verificar que el voluntario existe
    const voluntario = await this.voluntarioRepo.findOne({
      where: { id_voluntario: dto.id_voluntario }
    });

    if (!voluntario) {
      throw new NotFoundException(`Voluntario con ID ${dto.id_voluntario} no encontrado`);
    }

    // Verificar que el voluntario no tenga una solicitud pendiente o aprobada para este proyecto
    const existingSolicitud = await this.repo.findOne({
      where: {
        id_proyecto: dto.id_proyecto,
        id_voluntario: dto.id_voluntario,
        estado: 'pendiente'
      }
    });

    if (existingSolicitud) {
      throw new BadRequestException('Ya existe una solicitud pendiente para este proyecto');
    }

    // También verificar si ya tiene una aprobada
    const solicitudAprobada = await this.repo.findOne({
      where: {
        id_proyecto: dto.id_proyecto,
        id_voluntario: dto.id_voluntario,
        estado: 'aprobada'
      }
    });

    if (solicitudAprobada) {
      throw new BadRequestException('Ya tienes una solicitud aprobada para este proyecto');
    }

    const solicitud = this.repo.create({
      id_proyecto: dto.id_proyecto,
      id_voluntario: dto.id_voluntario,
      estado: 'pendiente',
      motivacion: dto.motivacion || null,
      disponibilidad: dto.disponibilidad || null,
      experiencia_relacionada: dto.experiencia_relacionada || null,
      fecha_solicitud: new Date(),
    });

    return this.repo.save(solicitud);
  }

  async findAll() {
    return this.repo.find({
      relations: ['proyecto', 'voluntario', 'documentos'],
      order: { creado_en: 'DESC' }
    });
  }

  async findByProject(id_proyecto: number) {
    return this.repo.find({
      where: { id_proyecto },
      relations: ['voluntario', 'voluntario.usuario', 'documentos'],
      order: { creado_en: 'DESC' }
    });
  }

  async findByVolunteer(id_voluntario: number) {
    return this.repo.find({
      where: { id_voluntario },
      relations: ['proyecto', 'proyecto.organizacion', 'documentos'],
      order: { creado_en: 'DESC' }
    });
  }

  async findOne(id: number) {
    const solicitud = await this.repo.findOne({
      where: { id_solicitud: id },
      relations: ['proyecto', 'voluntario', 'voluntario.usuario', 'documentos']
    });

    if (!solicitud) {
      throw new NotFoundException(`Solicitud con ID ${id} no encontrada`);
    }

    return solicitud;
  }

  async update(id: number, dto: UpdateSolicitudInscripcionDto) {
    const solicitud = await this.findOne(id);

    if (dto.estado && dto.estado !== solicitud.estado) {
      solicitud.fecha_revision = new Date();
    }

    Object.assign(solicitud, dto);
    return this.repo.save(solicitud);
  }

  async remove(id: number) {
    const solicitud = await this.findOne(id);
    return this.repo.remove(solicitud);
  }
}

