import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from './asignacion.entity';
import { AsignacionService } from './asignacion.service';
import { AsignacionController } from './asignacion.controller';
import { Tarea } from '../tarea/tarea.entity';
import { Fase } from '../fase/fase.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Voluntario } from '../voluntario/voluntario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asignacion, Tarea, Fase, Proyecto, Organizacion, Voluntario])],
  controllers: [AsignacionController],
  providers: [AsignacionService],
})
export class AsignacionModule {}
