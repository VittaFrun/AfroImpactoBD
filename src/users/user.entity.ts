import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Rol } from '../rol/rol.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { PreferenciaUsuario } from '../preferencia-usuario/preferencia-usuario.entity';
import { ConfiguracionSeguridad } from '../configuracion-seguridad/configuracion-seguridad.entity';
import { Integracion } from '../integracion/integracion.entity';

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id_usuario: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ unique: true, length: 100, name: 'email' })
  email: string;

  @Column({ length: 255, name: 'password' })
  password: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column({ name: 'id_rol', nullable: true })
  id_rol: number | null;

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

  @OneToMany(() => PreferenciaUsuario, (preferenciaUsuario) => preferenciaUsuario.usuario)
  preferencias: PreferenciaUsuario[];

  @OneToMany(() => ConfiguracionSeguridad, (configuracionSeguridad) => configuracionSeguridad.usuario)
  configuracionesSeguridad: ConfiguracionSeguridad[];

  @OneToMany(() => Integracion, (integracion) => integracion.usuario)
  integraciones: Integracion[];
}
