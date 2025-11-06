import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { SolicitudInscripcion } from '../solicitud-inscripcion/solicitud-inscripcion.entity';

@Entity({ name: 'documento_solicitud' })
export class DocumentoSolicitud {
  @PrimaryGeneratedColumn({ name: 'id_documento' })
  id_documento: number;

  @Column({ name: 'id_solicitud' })
  id_solicitud: number;

  @ManyToOne(() => SolicitudInscripcion, (solicitud) => solicitud.documentos)
  @JoinColumn({ name: 'id_solicitud' })
  solicitud: SolicitudInscripcion;

  @Column({ length: 255, name: 'nombre_archivo' })
  nombre_archivo: string;

  @Column({ length: 500, name: 'ruta_archivo' })
  ruta_archivo: string;

  @Column({ length: 100, name: 'tipo_documento' })
  tipo_documento: string;

  @Column({ type: 'int' })
  tamaño: number;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;
}

