import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Fase } from '../fase/fase.entity';
import { Tarea } from '../tarea/tarea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto, Organizacion, Fase, Tarea])],
  controllers: [ProyectoController],
  providers: [ProyectoService],
  exports: [ProyectoService],
})
export class ProyectoModule {}
