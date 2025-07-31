import { Donacion } from '../donacion/donacion.entity';
export declare class MetodoPago {
    id_metodo: number;
    nombre: string;
    descripcion: string;
    donaciones: Donacion[];
}
