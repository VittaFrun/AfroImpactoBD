import { SolicitudInscripcionService } from './solicitud-inscripcion.service';
import { CreateSolicitudInscripcionDto } from './create-solicitud-inscripcion.dto';
import { UpdateSolicitudInscripcionDto } from './update-solicitud-inscripcion.dto';
import { Usuario } from '../users/user.entity';
import { DocumentoSolicitudService } from '../documento-solicitud/documento-solicitud.service';
import { VoluntarioService } from '../voluntario/voluntario.service';
export declare class SolicitudInscripcionController {
    private readonly service;
    private readonly documentoService;
    private readonly voluntarioService;
    constructor(service: SolicitudInscripcionService, documentoService: DocumentoSolicitudService, voluntarioService: VoluntarioService);
    create(dto: CreateSolicitudInscripcionDto, files: any[], user: Usuario): Promise<import("./solicitud-inscripcion.entity").SolicitudInscripcion>;
    findAll(): Promise<import("./solicitud-inscripcion.entity").SolicitudInscripcion[]>;
    findByProject(id: number): Promise<import("./solicitud-inscripcion.entity").SolicitudInscripcion[]>;
    findByVolunteer(id: number): Promise<import("./solicitud-inscripcion.entity").SolicitudInscripcion[]>;
    findOne(id: number): Promise<import("./solicitud-inscripcion.entity").SolicitudInscripcion>;
    update(id: number, dto: UpdateSolicitudInscripcionDto): Promise<import("./solicitud-inscripcion.entity").SolicitudInscripcion>;
    remove(id: number): Promise<import("./solicitud-inscripcion.entity").SolicitudInscripcion>;
}
