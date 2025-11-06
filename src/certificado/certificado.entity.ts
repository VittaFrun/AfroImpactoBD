import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Proyecto } from '../proyecto/proyecto.entity';

@Entity({ name: 'certificado' })
export class Certificado {
  @PrimaryGeneratedColumn({ name: 'id_certificado' })
  id_certificado: number;

  @Column({ name: 'id_voluntario' })
  id_voluntario: number;

  @ManyToOne(() => Voluntario, (voluntario) => voluntario.certificados)
  @JoinColumn({ name: 'id_voluntario' })
  voluntario: Voluntario;

  @Column({ name: 'id_proyecto', nullable: true })
  id_proyecto: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.certificados, { nullable: true })
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @Column({ length: 100 })
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column({ length: 50 })
  tipo: string;

  @Column('date', { name: 'fecha_emision' })
  fecha_emision: Date;

  @Column('date', { name: 'fecha_expiracion', nullable: true })
  fecha_expiracion: Date;

  @Column({ name: 'codigo_verificacion', length: 50, unique: true })
  codigo_verificacion: string;

  @Column({ name: 'archivo_pdf', length: 255, nullable: true })
  archivo_pdf: string;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;
}

