import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Estado } from '../estado/estado.entity';
import { Fase } from '../fase/fase.entity';
import { DonacionProyecto } from '../donacion-proyecto/donacion-proyecto.entity';
import { Movimiento } from '../movimiento/movimiento.entity';
import { Reporte } from '../reporte/reporte.entity';

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

  @Column('date', { name: 'fecha_inicio' })
  fecha_inicio: Date;

  @Column('date', { name: 'fecha_fin' })
  fecha_fin: Date;

  @ManyToOne(() => Estado, (estado) => estado.proyectos)
  @JoinColumn({ name: 'id_estado' })
  estado: Estado;

  @OneToMany(() => Fase, (fase) => fase.proyecto)
  fases: Fase[];

  @OneToMany(() => DonacionProyecto, (donacionProyecto) => donacionProyecto.proyecto)
  donacionProyectos: DonacionProyecto[];

  @OneToMany(() => Movimiento, (movimiento) => movimiento.proyecto)
  movimientos: Movimiento[];

  @OneToMany(() => Reporte, (reporte) => reporte.proyecto)
  reportes: Reporte[];
}
