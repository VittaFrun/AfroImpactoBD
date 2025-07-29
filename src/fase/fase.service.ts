import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fase } from './fase.entity';
import { CreateFaseDto } from './create-fase.dto';
import { UpdateFaseDto } from './update-fase.dto';

@Injectable()
export class FaseService {
  constructor(
    @InjectRepository(Fase)
    private readonly repo: Repository<Fase>,
  ) {}

  create(dto: CreateFaseDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_fase: id } });
  }

  update(id: number, dto: UpdateFaseDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
