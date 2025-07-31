import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Donacion } from '../donacion/donacion.entity';
import { Proyecto } from '../proyecto/proyecto.entity';

@Entity({ name: 'donacion_proyecto' })
export class DonacionProyecto {
  @PrimaryGeneratedColumn({ name: 'id_donacion_proyecto' })
  id_donacion_proyecto: number;

  @Column({ name: 'id_donacion' })
  id_donacion: number;

  @ManyToOne(() => Donacion, (donacion) => donacion.donacionProyectos)
  @JoinColumn({ name: 'id_donacion' })
  donacion: Donacion;

  @Column({ name: 'id_proyecto' })
  id_proyecto: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.donacionProyectos)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @Column('decimal', { precision: 12, scale: 2, name: 'monto_asignado' })
  monto_asignado: number;
}
