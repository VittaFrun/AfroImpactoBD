import { Repository } from 'typeorm';
import { DocumentoSolicitud } from './documento-solicitud.entity';
import { SolicitudInscripcion } from '../solicitud-inscripcion/solicitud-inscripcion.entity';
export declare class DocumentoSolicitudService {
    private readonly repo;
    private readonly solicitudRepo;
    constructor(repo: Repository<DocumentoSolicitud>, solicitudRepo: Repository<SolicitudInscripcion>);
    create(id_solicitud: number, file: any, tipo_documento: string): Promise<DocumentoSolicitud>;
    findBySolicitud(id_solicitud: number): Promise<DocumentoSolicitud[]>;
    findOne(id: number): Promise<DocumentoSolicitud>;
    remove(id: number): Promise<DocumentoSolicitud>;
}
