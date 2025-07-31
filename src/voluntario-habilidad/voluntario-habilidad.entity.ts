import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Habilidad } from '../habilidad/habilidad.entity';

@Entity({ name: 'voluntario_habilidad' })
export class VoluntarioHabilidad {
  @PrimaryColumn({ name: 'id_voluntario' })
  id_voluntario: number;

  @PrimaryColumn({ name: 'id_habilidad' })
  id_habilidad: number;

  @ManyToOne(() => Voluntario, (voluntario) => voluntario.voluntarioHabilidades)
  @JoinColumn({ name: 'id_voluntario' })
  voluntario: Voluntario;

  @ManyToOne(() => Habilidad, (habilidad) => habilidad.voluntarioHabilidades)
  @JoinColumn({ name: 'id_habilidad' })
  habilidad: Habilidad;

  @Column({ length: 50, name: 'tiempo_experiencia' })
  tiempo_experiencia: string;

  @Column({ type: 'enum', enum: ['Básico', 'Intermedio', 'Avanzado'] })
  nivel: string;

  @Column({ default: false })
  verificado: boolean;
}
