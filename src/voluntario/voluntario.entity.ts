import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from '../users/user.entity';
import { Jornada } from '../jornada/jornada.entity';
import { Estado } from '../estado/estado.entity';
import { VoluntarioHabilidad } from '../voluntario-habilidad/voluntario-habilidad.entity';
import { Asignacion } from '../asignacion/asignacion.entity';
import { Disponibilidad } from '../disponibilidad/disponibilidad.entity';
import { Evaluacion } from '../evaluacion/evaluacion.entity';

@Entity({ name: 'voluntario' })
export class Voluntario {
  @PrimaryGeneratedColumn({ name: 'id_voluntario' })
  id_voluntario: number;

  @Column({ name: 'id_usuario' })
  id_usuario: number;

  @OneToOne(() => Usuario, (usuario) => usuario.voluntario)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id_usuario' })
  usuario: Usuario;

  @Column({ name: 'id_jornada', nullable: true })
  id_jornada: number;

  @ManyToOne(() => Jornada, (jornada) => jornada.voluntarios)
  @JoinColumn({ name: 'id_jornada' })
  jornada: Jornada;

  @Column({ name: 'id_estado', nullable: true })
  id_estado: number;

  @ManyToOne(() => Estado, (estado) => estado.voluntarios)
  @JoinColumn({ name: 'id_estado' })
  estado: Estado;

  @Column({ length: 50 })
  disponibilidad: string;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;

  @OneToMany(() => VoluntarioHabilidad, (voluntarioHabilidad) => voluntarioHabilidad.voluntario)
  voluntarioHabilidades: VoluntarioHabilidad[];

  @OneToMany(() => Asignacion, (asignacion) => asignacion.voluntario)
  asignaciones: Asignacion[];

  @OneToMany(() => Disponibilidad, (disponibilidad) => disponibilidad.voluntario)
  disponibilidades: Disponibilidad[];

  @OneToMany(() => Evaluacion, (evaluacion) => evaluacion.voluntario)
  evaluaciones: Evaluacion[];
}
