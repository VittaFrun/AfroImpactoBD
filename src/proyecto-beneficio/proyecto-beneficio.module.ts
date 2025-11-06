import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoBeneficio } from './proyecto-beneficio.entity';
import { ProyectoBeneficioService } from './proyecto-beneficio.service';
import { ProyectoBeneficioController } from './proyecto-beneficio.controller';
import { Proyecto } from '../proyecto/proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProyectoBeneficio, Proyecto])],
  controllers: [ProyectoBeneficioController],
  providers: [ProyectoBeneficioService],
  exports: [ProyectoBeneficioService],
})
export class ProyectoBeneficioModule {}

