import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Rol } from '../rol/rol.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Organizacion } from '../organizacion/organizacion.entity';

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id_usuario: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ unique: true, length: 100, name: 'correo' })
  correo: string;

  @Column({ length: 255, name: 'contraseña' })
  contraseña: string;

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;

  @OneToOne(() => Voluntario, (voluntario) => voluntario.usuario)
  voluntario: Voluntario;

  @OneToOne(() => Organizacion, (organizacion) => organizacion.usuario)
  organizacion: Organizacion;
}