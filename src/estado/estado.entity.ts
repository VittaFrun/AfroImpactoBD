import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Donacion } from '../donacion/donacion.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';

@Entity({ name: 'estado' })
export class Estado {
  @PrimaryGeneratedColumn({ name: 'id_estado' })
  id_estado: number;

  @Column({ length: 50 })
  nombre: string;

  @OneToMany(() => Voluntario, (voluntario) => voluntario.estado)
  voluntarios: Voluntario[];

  @OneToMany(() => Donacion, (donacion) => donacion.estado)
  donaciones: Donacion[];

  @OneToMany(() => Proyecto, (proyecto) => proyecto.estado)
  proyectos: Proyecto[];

  @OneToMany(() => Tarea, (tarea) => tarea.estado)
  tareas: Tarea[];
}
