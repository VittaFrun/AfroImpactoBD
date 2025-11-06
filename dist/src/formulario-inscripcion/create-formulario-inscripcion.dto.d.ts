export declare class CreateFormularioInscripcionDto {
    id_proyecto?: number;
    id_organizacion?: number;
    nombre_campo: string;
    tipo_campo: 'text' | 'textarea' | 'number' | 'date' | 'select' | 'file';
    etiqueta: string;
    placeholder?: string;
    requerido?: boolean;
    opciones?: string;
    orden?: number;
    activo?: boolean;
}
