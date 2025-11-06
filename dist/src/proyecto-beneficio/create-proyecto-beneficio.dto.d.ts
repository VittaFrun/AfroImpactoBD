export declare class CreateProyectoBeneficioDto {
    id_proyecto: number;
    tipo_pago?: 'volunteer' | 'stipend' | 'salary' | 'honorarium';
    monto?: number;
    frecuencia?: 'none' | 'monthly' | 'weekly' | 'project';
    descripcion_pago?: string;
    incluye_transporte?: boolean;
    incluye_alimentacion?: boolean;
    incluye_materiales?: boolean;
    incluye_seguro?: boolean;
}
