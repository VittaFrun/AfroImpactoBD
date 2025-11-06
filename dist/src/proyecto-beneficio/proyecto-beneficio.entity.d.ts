import { Proyecto } from '../proyecto/proyecto.entity';
export declare class ProyectoBeneficio {
    id_proyecto_beneficio: number;
    id_proyecto: number;
    proyecto: Proyecto;
    tipo_pago: 'volunteer' | 'stipend' | 'salary' | 'honorarium';
    monto: number;
    frecuencia: 'none' | 'monthly' | 'weekly' | 'project';
    descripcion_pago: string;
    incluye_transporte: boolean;
    incluye_alimentacion: boolean;
    incluye_materiales: boolean;
    incluye_seguro: boolean;
    creado_en: Date;
    actualizado_en: Date;
}
