import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorasVoluntariadas } from './horas-voluntariadas.entity';
import { HorasVoluntariadasService } from './horas-voluntariadas.service';
import { HorasVoluntariadasController } from './horas-voluntariadas.controller';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';
import { Asignacion } from '../asignacion/asignacion.entity';
import { Organizacion } from '../organizacion/organizacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    HorasVoluntariadas,
    Voluntario,
    Proyecto,
    Tarea,
    Asignacion,
    Organizacion
  ])],
  controllers: [HorasVoluntariadasController],
  providers: [HorasVoluntariadasService],
  exports: [HorasVoluntariadasService],
})
export class HorasVoluntariadasModule {}

