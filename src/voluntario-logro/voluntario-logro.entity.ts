import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Logro } from '../logro/logro.entity';
import { Proyecto } from '../proyecto/proyecto.entity';

@Entity({ name: 'voluntario_logro' })
export class VoluntarioLogro {
  @PrimaryGeneratedColumn({ name: 'id_voluntario_logro' })
  id_voluntario_logro: number;

  @Column({ name: 'id_voluntario' })
  id_voluntario: number;

  @ManyToOne(() => Voluntario, (voluntario) => voluntario.voluntarioLogros)
  @JoinColumn({ name: 'id_voluntario' })
  voluntario: Voluntario;

  @Column({ name: 'id_logro' })
  id_logro: number;

  @ManyToOne(() => Logro, (logro) => logro.voluntarioLogros)
  @JoinColumn({ name: 'id_logro' })
  logro: Logro;

  @Column('date', { name: 'fecha_obtenido' })
  fecha_obtenido: Date;

  @Column({ name: 'proyecto_relacionado', nullable: true })
  proyecto_relacionado: number;

  @ManyToOne(() => Proyecto, { nullable: true })
  @JoinColumn({ name: 'proyecto_relacionado' })
  proyecto: Proyecto;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;
}

