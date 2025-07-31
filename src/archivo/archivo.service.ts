import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Archivo } from './archivo.entity';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';

@Injectable()
export class ArchivoService {
  constructor(
    @InjectRepository(Archivo)
    private readonly archivoRepository: Repository<Archivo>,
  ) {}

  findAll(): Promise<Archivo[]> {
    return this.archivoRepository.find();
  }

  findOne(id: number): Promise<Archivo> {
    return this.archivoRepository.findOne({ where: { id_archivo: id } });
  }

  create(createArchivoDto: CreateArchivoDto): Promise<Archivo> {
    const archivo = this.archivoRepository.create(createArchivoDto);
    return this.archivoRepository.save(archivo);
  }

  async update(id: number, updateArchivoDto: UpdateArchivoDto): Promise<Archivo> {
    await this.archivoRepository.update(id, updateArchivoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.archivoRepository.delete(id);
  }
}
