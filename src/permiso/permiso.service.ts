import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permiso } from './permiso.entity';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';

@Injectable()
export class PermisoService {
  constructor(
    @InjectRepository(Permiso)
    private readonly permisoRepository: Repository<Permiso>,
  ) {}

  findAll(): Promise<Permiso[]> {
    return this.permisoRepository.find();
  }

  findOne(id: number): Promise<Permiso> {
    return this.permisoRepository.findOne({ where: { id_permiso: id } });
  }

  create(createPermisoDto: CreatePermisoDto): Promise<Permiso> {
    const permiso = this.permisoRepository.create(createPermisoDto);
    return this.permisoRepository.save(permiso);
  }

  async update(id: number, updatePermisoDto: UpdatePermisoDto): Promise<Permiso> {
    await this.permisoRepository.update(id, updatePermisoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.permisoRepository.delete(id);
  }
}
