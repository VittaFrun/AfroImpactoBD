import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluacion } from './evaluacion.entity';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionController } from './evaluacion.controller';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Voluntario } from '../voluntario/voluntario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluacion, Proyecto, Organizacion, Voluntario])],
  providers: [EvaluacionService],
  controllers: [EvaluacionController],
})
export class EvaluacionModule {}
