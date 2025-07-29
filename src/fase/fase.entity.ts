import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';

@Entity({ name: 'fase' })
export class Fase {
  @PrimaryGeneratedColumn({ name: 'id_fase' })
  id_fase: number;

  @Column({ length: 100 })
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column('int')
  orden: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.fases)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @OneToMany(() => Tarea, (tarea) => tarea.fase)
  tareas: Tarea[];
}
