import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { Organizacion } from '../organizacion/organizacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto, Organizacion])],
  controllers: [ProyectoController],
  providers: [ProyectoService],
})
export class ProyectoModule {}
