import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { VoluntarioHabilidad } from '../voluntario-habilidad/voluntario-habilidad.entity';

@Entity({ name: 'habilidad' })
export class Habilidad {
  @PrimaryGeneratedColumn({ name: 'id_habilidad' })
  id_habilidad: number;

  @Column({ length: 100 })
  nombre: string;

  @Column('text')
  descripcion: string;

  @OneToMany(() => VoluntarioHabilidad, (voluntarioHabilidad) => voluntarioHabilidad.habilidad)
  voluntarioHabilidades: VoluntarioHabilidad[];
}
