import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly repo: Repository<Proyecto>,
  ) {}

  async create(dto: CreateProyectoDto) {
    const proyecto = this.repo.create(dto);
    return this.repo.save(proyecto);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const proyecto = await this.repo.findOne({
      where: { id_proyecto: id },
    });
    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id} no encontrado`);
    }
    return proyecto;
  }

  async update(id: number, dto: UpdateProyectoDto) {
    const proyecto = await this.findOne(id);
    this.repo.merge(proyecto, dto);
    return this.repo.save(proyecto);
  }

  async remove(id: number) {
    const proyecto = await this.findOne(id);
    return this.repo.remove(proyecto);
  }
}
