import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudInscripcion } from './solicitud-inscripcion.entity';
import { SolicitudInscripcionService } from './solicitud-inscripcion.service';
import { SolicitudInscripcionController } from './solicitud-inscripcion.controller';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { DocumentoSolicitudModule } from '../documento-solicitud/documento-solicitud.module';
import { VoluntarioModule } from '../voluntario/voluntario.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SolicitudInscripcion, Proyecto, Voluntario]),
    VoluntarioModule,
    DocumentoSolicitudModule
  ],
  controllers: [SolicitudInscripcionController],
  providers: [SolicitudInscripcionService],
  exports: [SolicitudInscripcionService],
})
export class SolicitudInscripcionModule {}

