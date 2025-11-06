import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentoSolicitud } from './documento-solicitud.entity';
import { SolicitudInscripcion } from '../solicitud-inscripcion/solicitud-inscripcion.entity';

@Injectable()
export class DocumentoSolicitudService {
  constructor(
    @InjectRepository(DocumentoSolicitud)
    private readonly repo: Repository<DocumentoSolicitud>,
    @InjectRepository(SolicitudInscripcion)
    private readonly solicitudRepo: Repository<SolicitudInscripcion>,
  ) {}

  async create(id_solicitud: number, file: any, tipo_documento: string) {
    // Verificar que la solicitud existe
    const solicitud = await this.solicitudRepo.findOne({
      where: { id_solicitud }
    });

    if (!solicitud) {
      throw new NotFoundException(`Solicitud con ID ${id_solicitud} no encontrada`);
    }

    const documento = this.repo.create({
      id_solicitud,
      nombre_archivo: file.originalname,
      ruta_archivo: file.path || file.filename,
      tipo_documento: tipo_documento || 'general',
      tamaño: file.size,
    });

    return this.repo.save(documento);
  }

  async findBySolicitud(id_solicitud: number) {
    return this.repo.find({
      where: { id_solicitud },
      order: { creado_en: 'ASC' }
    });
  }

  async findOne(id: number) {
    const documento = await this.repo.findOne({
      where: { id_documento: id },
      relations: ['solicitud']
    });

    if (!documento) {
      throw new NotFoundException(`Documento con ID ${id} no encontrado`);
    }

    return documento;
  }

  async remove(id: number) {
    const documento = await this.findOne(id);
    return this.repo.remove(documento);
  }
}

