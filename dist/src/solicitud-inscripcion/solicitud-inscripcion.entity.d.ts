import { Proyecto } from '../proyecto/proyecto.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { DocumentoSolicitud } from '../documento-solicitud/documento-solicitud.entity';
export declare class SolicitudInscripcion {
    id_solicitud: number;
    id_proyecto: number;
    proyecto: Proyecto;
    id_voluntario: number;
    voluntario: Voluntario;
    estado: 'pendiente' | 'aprobada' | 'rechazada';
    motivacion: string;
    disponibilidad: string;
    experiencia_relacionada: string;
    notas_organizacion: string;
    fecha_solicitud: Date;
    fecha_revision: Date;
    creado_en: Date;
    actualizado_en: Date;
    documentos: DocumentoSolicitud[];
}
