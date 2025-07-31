import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Donacion } from '../donacion/donacion.entity';

@Entity({ name: 'metodopago' })
export class MetodoPago {
  @PrimaryGeneratedColumn({ name: 'id_metodo' })
  id_metodo: number;

  @Column({ length: 100 })
  nombre: string;

  @Column('text')
  descripcion: string;

  @OneToMany(() => Donacion, (donacion) => donacion.metodoPago)
  donaciones: Donacion[];
}
