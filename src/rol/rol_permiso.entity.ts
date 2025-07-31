import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Rol } from './rol.entity';
import { Permiso } from '../permiso/permiso.entity';

@Entity({ name: 'rol_permiso' })
export class RolPermiso {
  @PrimaryColumn({ name: 'id_rol' })
  id_rol: number;

  @PrimaryColumn({ name: 'id_permiso' })
  id_permiso: number;

  @ManyToOne(() => Rol, (rol) => rol.permisos)
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;

  @ManyToOne(() => Permiso, (permiso) => permiso.roles)
  @JoinColumn({ name: 'id_permiso' })
  permiso: Permiso;
}
