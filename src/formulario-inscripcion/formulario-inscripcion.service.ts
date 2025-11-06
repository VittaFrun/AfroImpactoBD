import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormularioInscripcion } from './formulario-inscripcion.entity';
import { CreateFormularioInscripcionDto } from './create-formulario-inscripcion.dto';
import { UpdateFormularioInscripcionDto } from './update-formulario-inscripcion.dto';
import { Proyecto } from '../proyecto/proyecto.entity';

@Injectable()
export class FormularioInscripcionService {
  constructor(
    @InjectRepository(FormularioInscripcion)
    private readonly repo: Repository<FormularioInscripcion>,
    @InjectRepository(Proyecto)
    private readonly proyectoRepo: Repository<Proyecto>,
  ) {}

  async create(dto: CreateFormularioInscripcionDto) {
    // Validar que al menos uno de id_proyecto o id_organizacion esté presente
    if (!dto.id_proyecto && !dto.id_organizacion) {
      throw new Error('Debe especificar id_proyecto o id_organizacion');
    }

    const campo = this.repo.create({
      id_proyecto: dto.id_proyecto || null,
      id_organizacion: dto.id_organizacion || null,
      nombre_campo: dto.nombre_campo,
      tipo_campo: dto.tipo_campo,
      etiqueta: dto.etiqueta,
      placeholder: dto.placeholder || null,
      requerido: dto.requerido || false,
      opciones: dto.opciones || null,
      orden: dto.orden || 0,
      activo: dto.activo !== undefined ? dto.activo : true,
    });

    return this.repo.save(campo);
  }

  async findAll() {
    return this.repo.find({
      order: { orden: 'ASC', creado_en: 'ASC' }
    });
  }

  async findByProject(id_proyecto: number) {
    return this.repo.find({
      where: { id_proyecto, activo: true },
      order: { orden: 'ASC' }
    });
  }

  async findByOrganization(id_organizacion: number) {
    return this.repo.find({
      where: { id_organizacion, activo: true },
      order: { orden: 'ASC' }
    });
  }

  async findActiveByProject(id_proyecto: number) {
    // Primero obtener el proyecto para saber su organización
    const proyecto = await this.proyectoRepo.findOne({
      where: { id_proyecto },
      select: ['id_organizacion']
    });

    if (!proyecto) {
      return [];
    }

    // Buscar campos específicos del proyecto
    const camposProyecto = await this.repo.find({
      where: { id_proyecto, activo: true },
      order: { orden: 'ASC' }
    });

    // Buscar campos generales de la organización
    const camposOrganizacion = await this.repo.find({
      where: { 
        id_organizacion: proyecto.id_organizacion, 
        id_proyecto: null,
        activo: true 
      },
      order: { orden: 'ASC' }
    });

    // Combinar y ordenar por orden
    const todosCampos = [...camposProyecto, ...camposOrganizacion];
    return todosCampos.sort((a, b) => a.orden - b.orden);
  }

  async findOne(id: number) {
    const campo = await this.repo.findOne({
      where: { id_formulario: id }
    });

    if (!campo) {
      throw new NotFoundException(`Campo de formulario con ID ${id} no encontrado`);
    }

    return campo;
  }

  async update(id: number, dto: UpdateFormularioInscripcionDto) {
    const campo = await this.findOne(id);
    Object.assign(campo, dto);
    return this.repo.save(campo);
  }

  async remove(id: number) {
    const campo = await this.findOne(id);
    return this.repo.remove(campo);
  }

  async reorder(id_proyecto: number, ordenes: { id_formulario: number; orden: number }[]) {
    const updates = ordenes.map(({ id_formulario, orden }) =>
      this.repo.update(id_formulario, { orden })
    );

    await Promise.all(updates);
    return this.findByProject(id_proyecto);
  }
}

