import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormularioInscripcion } from './formulario-inscripcion.entity';
import { FormularioInscripcionService } from './formulario-inscripcion.service';
import { FormularioInscripcionController } from './formulario-inscripcion.controller';
import { Proyecto } from '../proyecto/proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormularioInscripcion, Proyecto])],
  controllers: [FormularioInscripcionController],
  providers: [FormularioInscripcionService],
  exports: [FormularioInscripcionService],
})
export class FormularioInscripcionModule {}

