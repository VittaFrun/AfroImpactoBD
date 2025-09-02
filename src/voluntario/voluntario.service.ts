import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Voluntario } from './voluntario.entity';
import { CreateVoluntarioDto } from './create-voluntario.dto';
import { UpdateVoluntarioDto } from './update-voluntario.dto';
import { Usuario } from '../users/user.entity';

@Injectable()
export class VoluntarioService {
  constructor(
    @InjectRepository(Voluntario)
    private readonly repo: Repository<Voluntario>,
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}

  create(dto: CreateVoluntarioDto) {
    return this.repo.save(dto);
  }

  createBasic(id_usuario: number) {
    const newVoluntario = this.repo.create({
      id_usuario,
      id_jornada: 1,
      id_estado: 1,
      disponibilidad: 'No disponible',
    });
    return this.repo.save(newVoluntario);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_voluntario: id } });
  }

  async findByUserId(id_usuario: number) {
    const voluntario = await this.repo.findOne({ where: { id_usuario } });
    if (!voluntario) {
      throw new NotFoundException('Voluntario no encontrado');
    }
    return voluntario;
  }

  async updateByUserId(id_usuario: number, dto: UpdateVoluntarioDto) {
    const voluntario = await this.findByUserId(id_usuario);
    this.repo.merge(voluntario, dto);
    return this.repo.save(voluntario);
  }

  update(id: number, dto: UpdateVoluntarioDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
