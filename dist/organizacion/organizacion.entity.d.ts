import { Usuario } from '../users/user.entity';
import { Donacion } from '../donacion/donacion.entity';
export declare class Organizacion {
    id_organizacion: number;
    usuario: Usuario;
    nombre: string;
    tipo: string;
    sitio_web: string;
    pais: string;
    ciudad: string;
    areas_enfoque: string;
    mision_vision: string;
    donaciones: Donacion[];
}
