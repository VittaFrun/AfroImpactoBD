import { Proyecto } from '../proyecto/proyecto.entity';
export declare class Reporte {
    id_reporte: number;
    tipo: string;
    formato: string;
    fecha: Date;
    contenido: string;
    estado: string;
    incluir_graficos: boolean;
    descargas: number;
    id_proyecto: number;
    proyecto: Proyecto;
    creado_en: Date;
    actualizado_en: Date;
}
