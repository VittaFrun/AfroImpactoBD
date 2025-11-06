import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Voluntario } from './voluntario.entity';
import { CreateVoluntarioDto } from './create-voluntario.dto';
import { UpdateVoluntarioDto } from './update-voluntario.dto';
import { Usuario } from '../users/user.entity';
import { Estado } from '../estado/estado.entity';
import { Jornada } from '../jornada/jornada.entity';

@Injectable()
export class VoluntarioService {
  constructor(
    @InjectRepository(Voluntario)
    private readonly repo: Repository<Voluntario>,
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
    @InjectRepository(Estado)
    private readonly estadoRepo: Repository<Estado>,
    @InjectRepository(Jornada)
    private readonly jornadaRepo: Repository<Jornada>,
  ) {}

  create(dto: CreateVoluntarioDto) {
    return this.repo.save(dto);
  }

  async createBasic(id_usuario: number) {
    // Verificar que el usuario existe
    const usuario = await this.usuarioRepo.findOne({ 
      where: { id_usuario } 
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id_usuario} no encontrado`);
    }

    // Verificar que no existe ya un voluntario para este usuario
    const existingVoluntario = await this.repo.findOne({ 
      where: { id_usuario } 
    });
    if (existingVoluntario) {
      throw new ConflictException(`Ya existe un voluntario para el usuario ${id_usuario}`);
    }

    // Buscar un estado por defecto (activo) - REQUERIDO
    let id_estado: number;
    const estadoActivo = await this.estadoRepo.findOne({ 
      where: { nombre: 'activo' } 
    });
    if (!estadoActivo) {
      // Si no existe 'activo', buscar cualquier estado o usar el primero
      const estados = await this.estadoRepo.find({ 
        order: { id_estado: 'ASC' },
        take: 1
      });
      if (!estados || estados.length === 0) {
        throw new NotFoundException('No se encontró ningún estado en la base de datos. Por favor, crea al menos un estado.');
      }
      id_estado = estados[0].id_estado;
      console.warn(`No se encontró estado 'activo', usando estado con ID ${id_estado}`);
    } else {
      id_estado = estadoActivo.id_estado;
    }

    // Buscar una jornada por defecto - REQUERIDO
    let id_jornada: number;
    // Primero intentar encontrar una jornada por defecto
    let jornada = await this.jornadaRepo.findOne({ 
      where: { nombre: 'Completa' } 
    });
    
    if (!jornada) {
      // Si no existe, buscar cualquier jornada
      const jornadas = await this.jornadaRepo.find({ 
        order: { id_jornada: 'ASC' },
        take: 1
      });
      if (jornadas && jornadas.length > 0) {
        jornada = jornadas[0];
      }
    }

    if (!jornada) {
      // Si no existe ninguna jornada, crear una por defecto
      const nuevaJornada = this.jornadaRepo.create({
        nombre: 'Completa'
      });
      jornada = await this.jornadaRepo.save(nuevaJornada);
      console.log(`Jornada por defecto creada con ID ${jornada.id_jornada}`);
    }
    
    id_jornada = jornada.id_jornada;

    try {
      const newVoluntario = this.repo.create({
        id_usuario,
        id_jornada: id_jornada, // REQUERIDO - usar jornada por defecto
        id_estado: id_estado, // REQUERIDO - usar estado activo
        disponibilidad: 'No disponible',
      });
      const saved = await this.repo.save(newVoluntario);
      console.log(`Voluntario creado exitosamente para usuario ${id_usuario}, ID: ${saved.id_voluntario}`);
      return saved;
    } catch (error) {
      console.error(`Error al guardar voluntario para usuario ${id_usuario}:`, error);
      throw error;
    }
  }

  findAll() {
    return this.repo.find({
      relations: ['usuario', 'estado', 'jornada']
    });
  }

  findOne(id: number) {
    return this.repo.findOne({ 
      where: { id_voluntario: id },
      relations: ['usuario', 'estado', 'jornada']
    });
  }

  async findByUserId(id_usuario: number) {
    const voluntario = await this.repo.findOne({ 
      where: { id_usuario },
      relations: ['usuario', 'estado', 'jornada']
    });
    if (!voluntario) {
      throw new NotFoundException('Voluntario no encontrado');
    }
    return voluntario;
  }

  async updateByUserId(id_usuario: number, dto: UpdateVoluntarioDto) {
    const voluntario = await this.findByUserId(id_usuario);
    this.repo.merge(voluntario, dto);
    return this.repo.save(voluntario);
  }

  update(id: number, dto: UpdateVoluntarioDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
