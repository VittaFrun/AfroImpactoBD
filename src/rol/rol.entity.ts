import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Usuario } from '../users/user.entity';
import { Permiso } from '../permiso/permiso.entity';

@Entity({ name: 'rol' })
export class Rol {
  @PrimaryGeneratedColumn({ name: 'id_rol' })
  id_rol: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 255 })
  descripcion: string;

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuarios: Usuario[];

  @ManyToMany(() => Permiso, (permiso) => permiso.roles)
  @JoinTable({
    name: 'rol_permiso',
    joinColumn: { name: 'id_rol' },
    inverseJoinColumn: { name: 'id_permiso' },
  })
  permisos: Permiso[];
}
