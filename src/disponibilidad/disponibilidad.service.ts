import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disponibilidad } from './disponibilidad.entity';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';

@Injectable()
export class DisponibilidadService {
  constructor(
    @InjectRepository(Disponibilidad)
    private readonly disponibilidadRepository: Repository<Disponibilidad>,
  ) {}

  findAll(): Promise<Disponibilidad[]> {
    return this.disponibilidadRepository.find({ relations: ['voluntario'] });
  }

  findOne(id: number): Promise<Disponibilidad> {
    return this.disponibilidadRepository.findOne({ where: { id_disponibilidad: id }, relations: ['voluntario'] });
  }

  create(createDisponibilidadDto: CreateDisponibilidadDto): Promise<Disponibilidad> {
    const disponibilidad = this.disponibilidadRepository.create(createDisponibilidadDto);
    return this.disponibilidadRepository.save(disponibilidad);
  }

  async update(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<Disponibilidad> {
    await this.disponibilidadRepository.update(id, updateDisponibilidadDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.disponibilidadRepository.delete(id);
  }
}
