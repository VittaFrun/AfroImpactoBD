import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProyectoBeneficio } from './proyecto-beneficio.entity';
import { CreateProyectoBeneficioDto } from './create-proyecto-beneficio.dto';
import { UpdateProyectoBeneficioDto } from './update-proyecto-beneficio.dto';
import { Proyecto } from '../proyecto/proyecto.entity';

@Injectable()
export class ProyectoBeneficioService {
  constructor(
    @InjectRepository(ProyectoBeneficio)
    private readonly repo: Repository<ProyectoBeneficio>,
    @InjectRepository(Proyecto)
    private readonly proyectoRepo: Repository<Proyecto>,
  ) {}

  async create(dto: CreateProyectoBeneficioDto) {
    // Verificar que el proyecto existe
    const proyecto = await this.proyectoRepo.findOne({
      where: { id_proyecto: dto.id_proyecto }
    });

    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${dto.id_proyecto} no encontrado`);
    }

    // Verificar si ya existe un beneficio para este proyecto
    const existingBeneficio = await this.repo.findOne({
      where: { id_proyecto: dto.id_proyecto }
    });

    if (existingBeneficio) {
      throw new Error('Este proyecto ya tiene un registro de beneficios. Use el método de actualización.');
    }

    const beneficio = this.repo.create({
      id_proyecto: dto.id_proyecto,
      tipo_pago: dto.tipo_pago || 'volunteer',
      monto: dto.monto || 0,
      frecuencia: dto.frecuencia || 'none',
      descripcion_pago: dto.descripcion_pago || null,
      incluye_transporte: dto.incluye_transporte || false,
      incluye_alimentacion: dto.incluye_alimentacion || false,
      incluye_materiales: dto.incluye_materiales || false,
      incluye_seguro: dto.incluye_seguro || false,
    });

    return this.repo.save(beneficio);
  }

  async findOne(id_proyecto: number) {
    const beneficio = await this.repo.findOne({
      where: { id_proyecto },
      relations: ['proyecto']
    });

    if (!beneficio) {
      return null;
    }

    return beneficio;
  }

  async update(id_proyecto: number, dto: UpdateProyectoBeneficioDto) {
    const beneficio = await this.repo.findOne({
      where: { id_proyecto }
    });

    if (!beneficio) {
      throw new NotFoundException(`Beneficio para proyecto con ID ${id_proyecto} no encontrado`);
    }

    Object.assign(beneficio, dto);
    return this.repo.save(beneficio);
  }

  async remove(id_proyecto: number) {
    const beneficio = await this.repo.findOne({
      where: { id_proyecto }
    });

    if (!beneficio) {
      throw new NotFoundException(`Beneficio para proyecto con ID ${id_proyecto} no encontrado`);
    }

    return this.repo.remove(beneficio);
  }
}

