import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habilidad } from './habilidad.entity';
import { CreateHabilidadDto } from './create-habilidad.dto';
import { UpdateHabilidadDto } from './update-habilidad.dto';

@Injectable()
export class HabilidadService {
  constructor(
    @InjectRepository(Habilidad)
    private readonly repo: Repository<Habilidad>,
  ) {}

  create(dto: CreateHabilidadDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_habilidad: id } });
  }

  update(id: number, dto: UpdateHabilidadDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
