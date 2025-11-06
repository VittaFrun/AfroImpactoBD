import { Response } from 'express';
import { DocumentoSolicitudService } from './documento-solicitud.service';
export declare class DocumentoSolicitudController {
    private readonly service;
    constructor(service: DocumentoSolicitudService);
    findBySolicitud(id: number): Promise<import("./documento-solicitud.entity").DocumentoSolicitud[]>;
    findOne(id: number): Promise<import("./documento-solicitud.entity").DocumentoSolicitud>;
    download(id: number, res: Response): Promise<void>;
    remove(id: number): Promise<import("./documento-solicitud.entity").DocumentoSolicitud>;
}
