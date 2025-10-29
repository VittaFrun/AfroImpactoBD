import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donacion } from './donacion.entity';
import { CreateDonacionDto } from './create-donacion.dto';
import { UpdateDonacionDto } from './update-donacion.dto';
import { Usuario } from '../users/user.entity';
import { Organizacion } from '../organizacion/organizacion.entity';

@Injectable()
export class DonacionService {
  constructor(
    @InjectRepository(Donacion)
    private readonly repo: Repository<Donacion>,
    @InjectRepository(Organizacion)
    private readonly orgRepo: Repository<Organizacion>,
  ) {}

  async create(dto: CreateDonacionDto, user: Usuario) {
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
    if (!organizacion) {
      throw new NotFoundException('Organizacion no encontrada para el usuario');
    }
    const donacion = this.repo.create({ ...dto, id_organizacion: organizacion.id_organizacion });
    return this.repo.save(donacion);
  }

  findAll() {
    return this.repo.find();
  }

  async findAllByOrganizacion(id_organizacion: number, user: Usuario) {
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
    if (user.tipo_usuario !== 'admin' && organizacion.id_organizacion !== id_organizacion) {
      throw new ForbiddenException('No tienes permiso para ver estas donaciones.');
    }
    return this.repo.find({ where: { id_organizacion } });
  }

  async findByOrganizacion(id_organizacion: number) {
    return this.repo.find({ where: { id_organizacion } });
  }

  async findOne(id: number, user: Usuario) {
    const donacion = await this.repo.findOne({ where: { id_donacion: id } });
    if (!donacion) {
      throw new NotFoundException(`Donacion con ID ${id} no encontrada`);
    }
    await this.checkOrganizacionOwnership(donacion, user);
    return donacion;
  }

  async update(id: number, dto: UpdateDonacionDto, user: Usuario) {
    const donacion = await this.findOne(id, user);
    this.repo.merge(donacion, dto);
    return this.repo.save(donacion);
  }

  async remove(id: number, user: Usuario) {
    if (user.tipo_usuario !== 'admin') {
        throw new ForbiddenException('No tienes permiso para eliminar donaciones.');
    }
    const donacion = await this.repo.findOne({ where: { id_donacion: id } });
    if (!donacion) {
      throw new NotFoundException(`Donacion con ID ${id} no encontrada`);
    }
    return this.repo.remove(donacion);
  }

  private async checkOrganizacionOwnership(donacion: Donacion, user: Usuario) {
    if (user.tipo_usuario === 'admin') return;

    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
    if (!organizacion || donacion.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso sobre esta donacion.');
    }
  }
}
