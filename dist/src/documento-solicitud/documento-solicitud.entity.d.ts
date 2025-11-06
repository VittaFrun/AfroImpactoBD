import { SolicitudInscripcion } from '../solicitud-inscripcion/solicitud-inscripcion.entity';
export declare class DocumentoSolicitud {
    id_documento: number;
    id_solicitud: number;
    solicitud: SolicitudInscripcion;
    nombre_archivo: string;
    ruta_archivo: string;
    tipo_documento: string;
    tamaño: number;
    creado_en: Date;
}
