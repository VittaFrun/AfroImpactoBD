import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Proyecto } from '../proyecto/proyecto.entity';

@Entity({ name: 'proyecto_beneficio' })
export class ProyectoBeneficio {
  @PrimaryGeneratedColumn({ name: 'id_proyecto_beneficio' })
  id_proyecto_beneficio: number;

  @Column({ name: 'id_proyecto', unique: true })
  id_proyecto: number;

  @OneToOne(() => Proyecto, (proyecto) => proyecto.beneficio)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @Column({
    type: 'enum',
    enum: ['volunteer', 'stipend', 'salary', 'honorarium'],
    default: 'volunteer',
    name: 'tipo_pago'
  })
  tipo_pago: 'volunteer' | 'stipend' | 'salary' | 'honorarium';

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  monto: number;

  @Column({
    type: 'enum',
    enum: ['none', 'monthly', 'weekly', 'project'],
    default: 'none'
  })
  frecuencia: 'none' | 'monthly' | 'weekly' | 'project';

  @Column({ type: 'text', nullable: true, name: 'descripcion_pago' })
  descripcion_pago: string;

  @Column({ default: false, name: 'incluye_transporte' })
  incluye_transporte: boolean;

  @Column({ default: false, name: 'incluye_alimentacion' })
  incluye_alimentacion: boolean;

  @Column({ default: false, name: 'incluye_materiales' })
  incluye_materiales: boolean;

  @Column({ default: false, name: 'incluye_seguro' })
  incluye_seguro: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;
}

