import { Proyecto } from '../proyecto/proyecto.entity';
export declare class Reporte {
    id_reporte: number;
    tipo: string;
    fecha: Date;
    contenido: string;
    id_proyecto: number;
    proyecto: Proyecto;
}
