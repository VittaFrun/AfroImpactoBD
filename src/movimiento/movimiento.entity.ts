import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';
import { Donacion } from '../donacion/donacion.entity';

@Entity({ name: 'movimiento' })
export class Movimiento {
  @PrimaryGeneratedColumn({ name: 'id_movimiento' })
  id_movimiento: number;

  @Column({ length: 50 })
  tipo: string;

  @Column('text')
  descripcion: string;

  @Column('int')
  cantidad: number;

  @Column('decimal', { precision: 12, scale: 2 })
  monto: number;

  @Column('date')
  fecha: Date;

  @Column({ length: 255, nullable: true })
  comprobante: string;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.movimientos, { nullable: true })
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @ManyToOne(() => Tarea, (tarea) => tarea.movimientos, { nullable: true })
  @JoinColumn({ name: 'id_tarea' })
  tarea: Tarea;

  @ManyToOne(() => Donacion, (donacion) => donacion.movimientos, { nullable: true })
  @JoinColumn({ name: 'id_donacion' })
  donacion: Donacion;
}
