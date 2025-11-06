import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { DocumentoSolicitud } from '../documento-solicitud/documento-solicitud.entity';

@Entity({ name: 'solicitud_inscripcion' })
export class SolicitudInscripcion {
  @PrimaryGeneratedColumn({ name: 'id_solicitud' })
  id_solicitud: number;

  @Column({ name: 'id_proyecto' })
  id_proyecto: number;

  @ManyToOne(() => Proyecto)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @Column({ name: 'id_voluntario' })
  id_voluntario: number;

  @ManyToOne(() => Voluntario)
  @JoinColumn({ name: 'id_voluntario' })
  voluntario: Voluntario;

  @Column({
    type: 'enum',
    enum: ['pendiente', 'aprobada', 'rechazada'],
    default: 'pendiente'
  })
  estado: 'pendiente' | 'aprobada' | 'rechazada';

  @Column({ type: 'text', nullable: true })
  motivacion: string;

  @Column({ type: 'text', nullable: true })
  disponibilidad: string;

  @Column({ type: 'text', nullable: true, name: 'experiencia_relacionada' })
  experiencia_relacionada: string;

  @Column({ type: 'text', nullable: true, name: 'notas_organizacion' })
  notas_organizacion: string;

  @Column({ type: 'date', name: 'fecha_solicitud' })
  fecha_solicitud: Date;

  @Column({ type: 'date', nullable: true, name: 'fecha_revision' })
  fecha_revision: Date;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;

  @OneToMany(() => DocumentoSolicitud, (documento) => documento.solicitud)
  documentos: DocumentoSolicitud[];
}

