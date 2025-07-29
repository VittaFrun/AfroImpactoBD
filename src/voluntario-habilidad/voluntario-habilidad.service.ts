import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VoluntarioHabilidad } from './voluntario-habilidad.entity';
import { CreateVoluntarioHabilidadDto } from './create-voluntario-habilidad.dto';
import { UpdateVoluntarioHabilidadDto } from './update-voluntario-habilidad.dto';

@Injectable()
export class VoluntarioHabilidadService {
  constructor(
    @InjectRepository(VoluntarioHabilidad)
    private readonly repo: Repository<VoluntarioHabilidad>,
  ) {}

  create(dto: CreateVoluntarioHabilidadDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id_voluntario: number, id_habilidad: number) {
    const voluntarioHabilidad = await this.repo.findOne({
      where: { id_voluntario, id_habilidad },
    });
    if (!voluntarioHabilidad) {
      throw new NotFoundException(
        `VoluntarioHabilidad con Voluntario ID ${id_voluntario} y Habilidad ID ${id_habilidad} no encontrada`,
      );
    }
    return voluntarioHabilidad;
  }

  async update(id_voluntario: number, id_habilidad: number, dto: UpdateVoluntarioHabilidadDto) {
    const voluntarioHabilidad = await this.findOne(id_voluntario, id_habilidad);
    this.repo.merge(voluntarioHabilidad, dto);
    return this.repo.save(voluntarioHabilidad);
  }

  async remove(id_voluntario: number, id_habilidad: number) {
    const voluntarioHabilidad = await this.findOne(id_voluntario, id_habilidad);
    return this.repo.remove(voluntarioHabilidad);
  }
}
