import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Tarea } from '../tarea/tarea.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Rol } from '../rol/rol.entity';

@Entity({ name: 'asignacion' })
export class Asignacion {
  @PrimaryGeneratedColumn({ name: 'id_asignacion' })
  id_asignacion: number;

  @Column({ name: 'id_tarea' })
  id_tarea: number;

  @ManyToOne(() => Tarea, (tarea) => tarea.asignaciones)
  @JoinColumn({ name: 'id_tarea' })
  tarea: Tarea;

  @Column({ name: 'id_voluntario' })
  id_voluntario: number;

  @ManyToOne(() => Voluntario, (voluntario) => voluntario.asignaciones)
  @JoinColumn({ name: 'id_voluntario' })
  voluntario: Voluntario;

  @Column({ name: 'id_rol' })
  id_rol: number;

  @ManyToOne(() => Rol)
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;
}
