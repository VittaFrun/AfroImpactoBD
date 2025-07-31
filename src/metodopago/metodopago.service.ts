import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoPago } from './metodopago.entity';
import { CreateMetodoPagoDto } from './dto/create-metodopago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodopago.dto';

@Injectable()
export class MetodoPagoService {
  constructor(
    @InjectRepository(MetodoPago)
    private readonly metodoPagoRepository: Repository<MetodoPago>,
  ) {}

  findAll(): Promise<MetodoPago[]> {
    return this.metodoPagoRepository.find();
  }

  findOne(id: number): Promise<MetodoPago> {
    return this.metodoPagoRepository.findOne({ where: { id_metodo: id } });
  }

  create(createMetodoPagoDto: CreateMetodoPagoDto): Promise<MetodoPago> {
    const metodoPago = this.metodoPagoRepository.create(createMetodoPagoDto);
    return this.metodoPagoRepository.save(metodoPago);
  }

  async update(id: number, updateMetodoPagoDto: UpdateMetodoPagoDto): Promise<MetodoPago> {
    await this.metodoPagoRepository.update(id, updateMetodoPagoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.metodoPagoRepository.delete(id);
  }
}
