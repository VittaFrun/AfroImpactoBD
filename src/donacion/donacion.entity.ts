import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Estado } from '../estado/estado.entity';
import { DonacionProyecto } from '../donacion-proyecto/donacion-proyecto.entity';
import { Movimiento } from '../movimiento/movimiento.entity';
import { MetodoPago } from '../metodopago/metodopago.entity';

@Entity({ name: 'donacion' })
export class Donacion {
  @PrimaryGeneratedColumn({ name: 'id_donacion' })
  id_donacion: number;

  @Column({ name: 'id_organizacion' })
  id_organizacion: number;

  @ManyToOne(() => Organizacion, (organizacion) => organizacion.donaciones)
  @JoinColumn({ name: 'id_organizacion' })
  organizacion: Organizacion;

  @Column({ name: 'id_metodo' })
  id_metodo: number;

  @ManyToOne(() => MetodoPago, (metodoPago) => metodoPago.donaciones)
  @JoinColumn({ name: 'id_metodo' })
  metodoPago: MetodoPago;

  @Column('decimal', { precision: 12, scale: 2, name: 'monto_total' })
  monto_total: number;

  @Column('date')
  fecha: Date;

  @Column('text')
  condiciones: string;

  @Column({ default: false })
  verificado: boolean;

  @Column({ name: 'id_estado' })
  id_estado: number;

  @ManyToOne(() => Estado, (estado) => estado.donaciones)
  @JoinColumn({ name: 'id_estado' })
  estado: Estado;

  @OneToMany(() => DonacionProyecto, (donacionProyecto) => donacionProyecto.donacion)
  donacionProyectos: DonacionProyecto[];

  @OneToMany(() => Movimiento, (movimiento) => movimiento.donacion)
  movimientos: Movimiento[];
}
