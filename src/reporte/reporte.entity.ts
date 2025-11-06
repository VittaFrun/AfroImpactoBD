import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Proyecto } from '../proyecto/proyecto.entity';

@Entity({ name: 'reporte' })
export class Reporte {
  @PrimaryGeneratedColumn({ name: 'id_reporte' })
  id_reporte: number;

  @Column({ length: 50 })
  tipo: string;

  @Column({ length: 20, default: 'PDF' })
  formato: string;

  @Column('date')
  fecha: Date;

  @Column('text')
  contenido: string;

  @Column({ length: 20, default: 'pendiente' })
  estado: string;

  @Column({ name: 'incluir_graficos', default: true })
  incluir_graficos: boolean;

  @Column({ default: 0 })
  descargas: number;

  @Column({ name: 'id_proyecto' })
  id_proyecto: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.reportes)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;
}
