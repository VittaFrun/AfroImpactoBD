import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
import { Usuario } from '../users/user.entity';
import { Organizacion } from '../organizacion/organizacion.entity';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly repo: Repository<Proyecto>,
    @InjectRepository(Organizacion)
    private readonly orgRepo: Repository<Organizacion>,
  ) {}

  async create(dto: CreateProyectoDto, user: Usuario) {
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
    if (!organizacion) {
      throw new NotFoundException('Organizacion no encontrada para el usuario');
    }
    const proyecto = this.repo.create({ ...dto, id_organizacion: organizacion.id_organizacion });
    return this.repo.save(proyecto);
  }

  findAll() {
    return this.repo.find({ relations: ['organizacion'] });
  }

  async findOne(id: number) {
    const proyecto = await this.repo.findOne({
      where: { id_proyecto: id },
      relations: ['organizacion'],
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
}
