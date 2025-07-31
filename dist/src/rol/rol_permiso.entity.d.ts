import { Rol } from './rol.entity';
import { Permiso } from '../permiso/permiso.entity';
export declare class RolPermiso {
    id_rol: number;
    id_permiso: number;
    rol: Rol;
    permiso: Permiso;
}
