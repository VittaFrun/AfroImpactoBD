import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Estado } from '../estado/estado.entity';
import { Fase } from '../fase/fase.entity';
import { Asignacion } from '../asignacion/asignacion.entity';
import { Movimiento } from '../movimiento/movimiento.entity';

@Entity({ name: 'tarea' })
export class Tarea {
  @PrimaryGeneratedColumn({ name: 'id_tarea' })
  id_tarea: number;

  @Column('text')
  descripcion: string;

  @Column('date', { name: 'fecha_inicio' })
  fecha_inicio: Date;

  @Column('date', { name: 'fecha_fin' })
  fecha_fin: Date;

  @Column({ type: 'enum', enum: ['Alta', 'Media', 'Baja'] })
  prioridad: string;

  @Column({ length: 100 })
  complejidad: string;

  @Column({ name: 'id_estado' })
  id_estado: number;

  @ManyToOne(() => Estado, (estado) => estado.tareas)
  @JoinColumn({ name: 'id_estado' })
  estado: Estado;

  @Column({ name: 'id_fase' })
  id_fase: number;

  @ManyToOne(() => Fase, (fase) => fase.tareas)
  @JoinColumn({ name: 'id_fase' })
  fase: Fase;

  @OneToMany(() => Asignacion, (asignacion) => asignacion.tarea)
  asignaciones: Asignacion[];

  @OneToMany(() => Movimiento, (movimiento) => movimiento.tarea)
  movimientos: Movimiento[];
}
