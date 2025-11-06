import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tarea.entity';
import { TareaService } from './tarea.service';
import { TareaController } from './tarea.controller';
import { Fase } from '../fase/fase.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Asignacion } from '../asignacion/asignacion.entity';
import { HorasVoluntariadas } from '../horas-voluntariadas/horas-voluntariadas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarea, Fase, Proyecto, Organizacion, Voluntario, Asignacion, HorasVoluntariadas])],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
