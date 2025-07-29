import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Voluntario } from '../voluntario/voluntario.entity';

@Entity({ name: 'jornada' })
export class Jornada {
  @PrimaryGeneratedColumn({ name: 'id_jornada' })
  id_jornada: number;

  @Column({ length: 50 })
  nombre: string;

  @OneToMany(() => Voluntario, (voluntario) => voluntario.jornada)
  voluntarios: Voluntario[];
}
