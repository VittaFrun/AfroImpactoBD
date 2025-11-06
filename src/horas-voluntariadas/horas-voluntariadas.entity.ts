import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';

@Entity({ name: 'horas_voluntariadas' })
export class HorasVoluntariadas {
  @PrimaryGeneratedColumn({ name: 'id_horas' })
  id_horas: number;

  @Column({ name: 'id_voluntario' })
  id_voluntario: number;

  @ManyToOne(() => Voluntario, (voluntario) => voluntario.horasVoluntariadas)
  @JoinColumn({ name: 'id_voluntario' })
  voluntario: Voluntario;

  @Column({ name: 'id_proyecto' })
  id_proyecto: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.horasVoluntariadas)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @Column({ name: 'id_tarea', nullable: true })
  id_tarea: number;

  @ManyToOne(() => Tarea, (tarea) => tarea.horasVoluntariadas, { nullable: true })
  @JoinColumn({ name: 'id_tarea' })
  tarea: Tarea;

  @Column('date')
  fecha: Date;

  @Column({ name: 'horas_trabajadas', type: 'decimal', precision: 4, scale: 2 })
  horas_trabajadas: number;

  @Column('text', { nullable: true })
  descripcion: string;

  @Column({ default: false })
  verificada: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;
}

