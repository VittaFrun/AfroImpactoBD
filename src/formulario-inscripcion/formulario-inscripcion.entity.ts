import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';

@Entity({ name: 'formulario_inscripcion' })
export class FormularioInscripcion {
  @PrimaryGeneratedColumn({ name: 'id_formulario' })
  id_formulario: number;

  @Column({ name: 'id_proyecto', nullable: true })
  id_proyecto: number | null;

  @ManyToOne(() => Proyecto, { nullable: true })
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto | null;

  @Column({ name: 'id_organizacion', nullable: true })
  id_organizacion: number | null;

  @ManyToOne(() => Organizacion, { nullable: true })
  @JoinColumn({ name: 'id_organizacion' })
  organizacion: Organizacion | null;

  @Column({ length: 100, name: 'nombre_campo' })
  nombre_campo: string;

  @Column({
    type: 'enum',
    enum: ['text', 'textarea', 'number', 'date', 'select', 'file'],
    name: 'tipo_campo'
  })
  tipo_campo: 'text' | 'textarea' | 'number' | 'date' | 'select' | 'file';

  @Column({ length: 255 })
  etiqueta: string;

  @Column({ length: 255, nullable: true })
  placeholder: string;

  @Column({ default: false })
  requerido: boolean;

  @Column({ type: 'text', nullable: true })
  opciones: string; // JSON string para campos tipo select

  @Column({ default: 0 })
  orden: number;

  @Column({ default: true })
  activo: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;
}

