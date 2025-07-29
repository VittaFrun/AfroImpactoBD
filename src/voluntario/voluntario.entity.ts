import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from '../users/user.entity';
import { Jornada } from '../jornada/jornada.entity';
import { Estado } from '../estado/estado.entity';
import { VoluntarioHabilidad } from '../voluntario-habilidad/voluntario-habilidad.entity';
import { Asignacion } from '../asignacion/asignacion.entity';

@Entity({ name: 'voluntario' })
export class Voluntario {
  @PrimaryGeneratedColumn({ name: 'id_voluntario' })
  id_voluntario: number;

  @OneToOne(() => Usuario, (usuario) => usuario.voluntario)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id_usuario' })
  usuario: Usuario;

  @ManyToOne(() => Jornada, (jornada) => jornada.voluntarios)
  @JoinColumn({ name: 'id_jornada' })
  jornada: Jornada;

  @ManyToOne(() => Estado, (estado) => estado.voluntarios)
  @JoinColumn({ name: 'id_estado' })
  estado: Estado;

  @Column({ length: 50 })
  disponibilidad: string;

  @OneToMany(() => VoluntarioHabilidad, (voluntarioHabilidad) => voluntarioHabilidad.voluntario)
  voluntarioHabilidades: VoluntarioHabilidad[];

  @OneToMany(() => Asignacion, (asignacion) => asignacion.voluntario)
  asignaciones: Asignacion[];
}
