import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Proyecto } from '../proyecto/proyecto.entity';

@Entity({ name: 'reporte' })
export class Reporte {
  @PrimaryGeneratedColumn({ name: 'id_reporte' })
  id_reporte: number;

  @Column({ length: 50 })
  tipo: string;

  @Column('date')
  fecha: Date;

  @Column('text')
  contenido: string;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.reportes)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;
}
