export declare class CreateSolicitudInscripcionDto {
    id_proyecto: number;
    id_voluntario?: number;
    motivacion?: string;
    disponibilidad?: string;
    experiencia_relacionada?: string;
    camposPersonalizados?: Record<string, any>;
    documentos?: any[];
}
