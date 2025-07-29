import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DonacionProyecto } from './donacion-proyecto.entity';
import { CreateDonacionProyectoDto } from './create-donacion-proyecto.dto';
import { UpdateDonacionProyectoDto } from './update-donacion-proyecto.dto';

@Injectable()
export class DonacionProyectoService {
  constructor(
    @InjectRepository(DonacionProyecto)
    private readonly repo: Repository<DonacionProyecto>,
  ) {}

  create(dto: CreateDonacionProyectoDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_donacion_proyecto: id } });
  }

  update(id: number, dto: UpdateDonacionProyectoDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
