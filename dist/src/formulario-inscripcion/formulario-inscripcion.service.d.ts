import { Repository } from 'typeorm';
import { FormularioInscripcion } from './formulario-inscripcion.entity';
import { CreateFormularioInscripcionDto } from './create-formulario-inscripcion.dto';
import { UpdateFormularioInscripcionDto } from './update-formulario-inscripcion.dto';
import { Proyecto } from '../proyecto/proyecto.entity';
export declare class FormularioInscripcionService {
    private readonly repo;
    private readonly proyectoRepo;
    constructor(repo: Repository<FormularioInscripcion>, proyectoRepo: Repository<Proyecto>);
    create(dto: CreateFormularioInscripcionDto): Promise<FormularioInscripcion>;
    findAll(): Promise<FormularioInscripcion[]>;
    findByProject(id_proyecto: number): Promise<FormularioInscripcion[]>;
    findByOrganization(id_organizacion: number): Promise<FormularioInscripcion[]>;
    findActiveByProject(id_proyecto: number): Promise<FormularioInscripcion[]>;
    findOne(id: number): Promise<FormularioInscripcion>;
    update(id: number, dto: UpdateFormularioInscripcionDto): Promise<FormularioInscripcion>;
    remove(id: number): Promise<FormularioInscripcion>;
    reorder(id_proyecto: number, ordenes: {
        id_formulario: number;
        orden: number;
    }[]): Promise<FormularioInscripcion[]>;
}
