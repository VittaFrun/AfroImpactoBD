import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jornada } from './jornada.entity';
import { CreateJornadaDto } from './create-jornada.dto';
import { UpdateJornadaDto } from './update-jornada.dto';

@Injectable()
export class JornadaService {
  constructor(
    @InjectRepository(Jornada)
    private readonly repo: Repository<Jornada>,
  ) {}

  create(dto: CreateJornadaDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_jornada: id } });
  }

  update(id: number, dto: UpdateJornadaDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
