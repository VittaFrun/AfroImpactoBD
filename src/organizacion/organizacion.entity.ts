import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from '../users/user.entity';
import { Donacion } from '../donacion/donacion.entity';

@Entity({ name: 'organizacion' })
export class Organizacion {
  @PrimaryGeneratedColumn({ name: 'id_organizacion' })
  id_organizacion: number;

  @OneToOne(() => Usuario, (usuario) => usuario.organizacion)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id_usuario' })
  usuario: Usuario;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 50 })
  tipo: string;

  @Column({ length: 255, name: 'sitio_web' })
  sitio_web: string;

  @Column({ length: 100 })
  pais: string;

  @Column({ length: 100 })
  ciudad: string;

  @Column('text', { name: 'areas_enfoque' })
  areas_enfoque: string;

  @Column('text', { name: 'mision_vision' })
  mision_vision: string;

  @OneToMany(() => Donacion, (donacion) => donacion.organizacion)
  donaciones: Donacion[];
}
