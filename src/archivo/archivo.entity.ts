import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'archivo' })
export class Archivo {
  @PrimaryGeneratedColumn({ name: 'id_archivo' })
  id_archivo: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  ruta: string;

  @Column({ length: 50 })
  tipo: string;

  @Column({ name: 'id_referencia' })
  id_referencia: number;

  @Column({ length: 50, name: 'tipo_referencia' })
  tipo_referencia: string;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;
}
