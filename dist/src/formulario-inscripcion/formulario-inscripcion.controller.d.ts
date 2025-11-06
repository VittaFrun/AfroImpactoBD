import { FormularioInscripcionService } from './formulario-inscripcion.service';
import { CreateFormularioInscripcionDto } from './create-formulario-inscripcion.dto';
import { UpdateFormularioInscripcionDto } from './update-formulario-inscripcion.dto';
export declare class FormularioInscripcionController {
    private readonly service;
    constructor(service: FormularioInscripcionService);
    create(dto: CreateFormularioInscripcionDto): Promise<import("./formulario-inscripcion.entity").FormularioInscripcion>;
    findAll(): Promise<import("./formulario-inscripcion.entity").FormularioInscripcion[]>;
    findByProject(id: number): Promise<import("./formulario-inscripcion.entity").FormularioInscripcion[]>;
    findActiveByProject(id: number): Promise<import("./formulario-inscripcion.entity").FormularioInscripcion[]>;
    findByOrganization(id: number): Promise<import("./formulario-inscripcion.entity").FormularioInscripcion[]>;
    findOne(id: number): Promise<import("./formulario-inscripcion.entity").FormularioInscripcion>;
    update(id: number, dto: UpdateFormularioInscripcionDto): Promise<import("./formulario-inscripcion.entity").FormularioInscripcion>;
    remove(id: number): Promise<import("./formulario-inscripcion.entity").FormularioInscripcion>;
    reorder(id: number, ordenes: {
        id_formulario: number;
        orden: number;
    }[]): Promise<import("./formulario-inscripcion.entity").FormularioInscripcion[]>;
}
