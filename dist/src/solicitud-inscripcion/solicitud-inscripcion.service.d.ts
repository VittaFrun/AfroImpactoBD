import { Repository } from 'typeorm';
import { SolicitudInscripcion } from './solicitud-inscripcion.entity';
import { CreateSolicitudInscripcionDto } from './create-solicitud-inscripcion.dto';
import { UpdateSolicitudInscripcionDto } from './update-solicitud-inscripcion.dto';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
export declare class SolicitudInscripcionService {
    private readonly repo;
    private readonly proyectoRepo;
    private readonly voluntarioRepo;
    constructor(repo: Repository<SolicitudInscripcion>, proyectoRepo: Repository<Proyecto>, voluntarioRepo: Repository<Voluntario>);
    create(dto: CreateSolicitudInscripcionDto): Promise<SolicitudInscripcion>;
    findAll(): Promise<SolicitudInscripcion[]>;
    findByProject(id_proyecto: number): Promise<SolicitudInscripcion[]>;
    findByVolunteer(id_voluntario: number): Promise<SolicitudInscripcion[]>;
    findOne(id: number): Promise<SolicitudInscripcion>;
    update(id: number, dto: UpdateSolicitudInscripcionDto): Promise<SolicitudInscripcion>;
    remove(id: number): Promise<SolicitudInscripcion>;
}
