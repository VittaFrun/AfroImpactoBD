import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
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

  @Column({ name: 'id_rol' })
  id_rol: number;

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;

  @Column({ length: 50, name: 'tipo_usuario' })
  tipo_usuario: string;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;

  @OneToOne(() => Voluntario, (voluntario) => voluntario.usuario)
  voluntario: Voluntario;

  @OneToOne(() => Organizacion, (organizacion) => organizacion.usuario)
  organizacion: Organizacion;
}
