import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizacion } from './organizacion.entity';
import { CreateOrganizacionDto } from './create-organizacion.dto';
import { UpdateOrganizacionDto } from './update-organizacion.dto';
import { Usuario } from '../users/user.entity';

@Injectable()
export class OrganizacionService {
  constructor(
    @InjectRepository(Organizacion)
    private readonly repo: Repository<Organizacion>,
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}

  async createBasic(id_usuario: number, nombre: string): Promise<Organizacion> {
    const usuario = await this.usuarioRepo.findOne({ where: { id_usuario } });
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    const organizacion = this.repo.create({ usuario, nombre });
    return this.repo.save(organizacion);
  }

  create(dto: CreateOrganizacionDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_organizacion: id } });
  }

  update(id: number, dto: UpdateOrganizacionDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
