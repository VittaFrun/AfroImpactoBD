import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from './estado.entity';
import { CreateEstadoDto } from './create-estado.dto';
import { UpdateEstadoDto } from './update-estado.dto';

@Injectable()
export class EstadoService {
  constructor(
    @InjectRepository(Estado)
    private readonly repo: Repository<Estado>,
  ) {}

  async create(dto: CreateEstadoDto) {
    // Verificar si ya existe un estado con el mismo nombre
    const existingEstado = await this.repo.findOne({
      where: { nombre: dto.nombre.trim() }
    });
    
    if (existingEstado) {
      throw new Error(`Ya existe un estado con el nombre "${dto.nombre.trim()}"`);
    }
    
    const estado = this.repo.create({
      nombre: dto.nombre.trim()
    });
    
    return this.repo.save(estado);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_estado: id } });
  }

  update(id: number, dto: UpdateEstadoDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
