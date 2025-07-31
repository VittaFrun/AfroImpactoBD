import { Usuario } from '../users/user.entity';
import { Permiso } from '../permiso/permiso.entity';
export declare class Rol {
    id_rol: number;
    nombre: string;
    descripcion: string;
    usuarios: Usuario[];
    permisos: Permiso[];
}
