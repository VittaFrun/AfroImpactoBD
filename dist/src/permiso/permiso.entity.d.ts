import { Rol } from '../rol/rol.entity';
export declare class Permiso {
    id_permiso: number;
    nombre: string;
    descripcion: string;
    roles: Rol[];
}
