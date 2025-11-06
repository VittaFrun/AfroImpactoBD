import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentoSolicitud } from './documento-solicitud.entity';
import { DocumentoSolicitudService } from './documento-solicitud.service';
import { DocumentoSolicitudController } from './documento-solicitud.controller';
import { SolicitudInscripcion } from '../solicitud-inscripcion/solicitud-inscripcion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentoSolicitud, SolicitudInscripcion])],
  controllers: [DocumentoSolicitudController],
  providers: [DocumentoSolicitudService],
  exports: [DocumentoSolicitudService],
})
export class DocumentoSolicitudModule {}

