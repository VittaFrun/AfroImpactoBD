import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Usuario } from './user.entity';
import { Rol } from '../rol/rol.entity'; // <--- AÑADE ESTA LÍNEA

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Rol])], // <--- AÑADE Rol AQUÍ
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
