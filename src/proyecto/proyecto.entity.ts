import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Estado } from '../estado/estado.entity';
import { Fase } from '../fase/fase.entity';
import { DonacionProyecto } from '../donacion-proyecto/donacion-proyecto.entity';
import { Movimiento } from '../movimiento/movimiento.entity';
import { Reporte } from '../reporte/reporte.entity';
import { Evaluacion } from '../evaluacion/evaluacion.entity';

@Entity({ name: 'proyecto' })
export class Proyecto {
  @PrimaryGeneratedColumn({ name: 'id_proyecto' })
  id_proyecto: number;

  @Column({ length: 100 })
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column('text')
  objetivo: string;

  @Column({ length: 100 })
  ubicacion: string;

  @Column('datetime', { name: 'fecha_inicio' })
  fecha_inicio: Date;

  @Column('datetime', { name: 'fecha_fin' })
  fecha_fin: Date;

  @Column({ length: 255, name: 'imagen_principal', nullable: true })
  imagen_principal: string;

  @Column({ name: 'id_estado' })
  id_estado: number;

  @ManyToOne(() => Estado, (estado) => estado.proyectos)
  @JoinColumn({ name: 'id_estado' })
  estado: Estado;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;

  @OneToMany(() => Fase, (fase) => fase.proyecto)
  fases: Fase[];

  @OneToMany(() => DonacionProyecto, (donacionProyecto) => donacionProyecto.proyecto)
  donacionProyectos: DonacionProyecto[];

  @OneToMany(() => Movimiento, (movimiento) => movimiento.proyecto)
  movimientos: Movimiento[];

  @OneToMany(() => Reporte, (reporte) => reporte.proyecto)
  reportes: Reporte[];

  @OneToMany(() => Evaluacion, (evaluacion) => evaluacion.proyecto)
  evaluaciones: Evaluacion[];
}
