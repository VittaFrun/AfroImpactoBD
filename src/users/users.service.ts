import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Rol } from '../rol/rol.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuario)
    private usersRepository: Repository<Usuario>,
    @InjectRepository(Rol)
    private rolesRepository: Repository<Rol>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Usuario> {
    const user = this.usersRepository.create({
      nombre: createUserDto.nombre,
      correo: createUserDto.correo,
      contraseña: createUserDto.contraseña,
      id_rol: createUserDto.id_rol,
      tipo_usuario: createUserDto.tipo_usuario,
    });
    return this.usersRepository.save(user);
  }

  async findOneByEmail(email: string): Promise<Usuario | undefined> {
    const user = await this.usersRepository.findOne({ where: { correo: email } });
    return user ?? undefined;
  }

  async findOneByEmailWithRol(email: string): Promise<Usuario | undefined> {
    const user = await this.usersRepository.findOne({ where: { correo: email }, relations: ['rol'] });
    return user ?? undefined;
  }

  async addRolToUser(userId: number, rolId: number): Promise<Usuario> {
    const user = await this.usersRepository.findOne({ where: { id_usuario: userId }, relations: ['rol'] });
    if (!user) {
      throw new NotFoundException(`Usuario con ID "${userId}" no encontrado`);
    }

    const rol = await this.rolesRepository.findOne({ where: { id_rol: rolId } });
    if (!rol) {
      throw new NotFoundException(`Rol con ID "${rolId}" no encontrado`);
    }

    user.rol = rol;
    return this.usersRepository.save(user);
  }
}