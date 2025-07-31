import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from './evaluacion.entity';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Evaluacion)
    private readonly evaluacionRepository: Repository<Evaluacion>,
  ) {}

  findAll(): Promise<Evaluacion[]> {
    return this.evaluacionRepository.find({ relations: ['voluntario', 'proyecto'] });
  }

  findOne(id: number): Promise<Evaluacion> {
    return this.evaluacionRepository.findOne({ where: { id_evaluacion: id }, relations: ['voluntario', 'proyecto'] });
  }

  create(createEvaluacionDto: CreateEvaluacionDto): Promise<Evaluacion> {
    const evaluacion = this.evaluacionRepository.create(createEvaluacionDto);
    return this.evaluacionRepository.save(evaluacion);
  }

  async update(id: number, updateEvaluacionDto: UpdateEvaluacionDto): Promise<Evaluacion> {
    await this.evaluacionRepository.update(id, updateEvaluacionDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.evaluacionRepository.delete(id);
  }
}
