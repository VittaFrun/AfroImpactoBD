export declare class CreateMovimientoDto {
    tipo: string;
    descripcion: string;
    cantidad: number;
    monto: number;
    fecha: Date;
    comprobante?: string;
    id_proyecto: number;
    id_tarea?: number;
    id_donacion?: number;
}
