import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Voluntario } from '../voluntario/voluntario.entity';

@Entity({ name: 'disponibilidad' })
export class Disponibilidad {
  @PrimaryGeneratedColumn({ name: 'id_disponibilidad' })
  id_disponibilidad: number;

  @Column({ name: 'id_voluntario' })
  id_voluntario: number;

  @ManyToOne(() => Voluntario, (voluntario) => voluntario.disponibilidades)
  @JoinColumn({ name: 'id_voluntario' })
  voluntario: Voluntario;

  @Column({ length: 20, name: 'dia_semana' })
  dia_semana: string;

  @Column('time', { name: 'hora_inicio' })
  hora_inicio: string;

  @Column('time', { name: 'hora_fin' })
  hora_fin: string;
}
