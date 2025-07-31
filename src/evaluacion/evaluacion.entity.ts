import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Proyecto } from '../proyecto/proyecto.entity';

@Entity({ name: 'evaluacion' })
export class Evaluacion {
  @PrimaryGeneratedColumn({ name: 'id_evaluacion' })
  id_evaluacion: number;

  @Column({ name: 'id_voluntario' })
  id_voluntario: number;

  @ManyToOne(() => Voluntario, (voluntario) => voluntario.evaluaciones)
  @JoinColumn({ name: 'id_voluntario' })
  voluntario: Voluntario;

  @Column({ name: 'id_proyecto' })
  id_proyecto: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.evaluaciones)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @Column('int')
  puntuacion: number;

  @Column('text')
  comentario: string;

  @Column('date')
  fecha: Date;
}
