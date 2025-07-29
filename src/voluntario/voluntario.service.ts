import { Injectable } from '@nestjs/common';
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

  async createBasic(id_usuario: number): Promise<Voluntario> {
    const usuario = await this.usuarioRepo.findOne({ where: { id_usuario } });
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    const voluntario = this.repo.create({ usuario });
    return this.repo.save(voluntario);
  }

  create(dto: CreateVoluntarioDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_voluntario: id } });
  }

  update(id: number, dto: UpdateVoluntarioDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
