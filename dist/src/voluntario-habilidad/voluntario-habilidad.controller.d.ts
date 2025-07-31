import { VoluntarioHabilidadService } from './voluntario-habilidad.service';
import { CreateVoluntarioHabilidadDto } from './create-voluntario-habilidad.dto';
import { UpdateVoluntarioHabilidadDto } from './update-voluntario-habilidad.dto';
export declare class VoluntarioHabilidadController {
    private readonly service;
    constructor(service: VoluntarioHabilidadService);
    create(dto: CreateVoluntarioHabilidadDto): Promise<CreateVoluntarioHabilidadDto & import("./voluntario-habilidad.entity").VoluntarioHabilidad>;
    findAll(): Promise<import("./voluntario-habilidad.entity").VoluntarioHabilidad[]>;
    findOne(idVoluntario: string, idHabilidad: string): Promise<import("./voluntario-habilidad.entity").VoluntarioHabilidad>;
    update(idVoluntario: string, idHabilidad: string, dto: UpdateVoluntarioHabilidadDto): Promise<import("./voluntario-habilidad.entity").VoluntarioHabilidad>;
    remove(idVoluntario: string, idHabilidad: string): Promise<import("./voluntario-habilidad.entity").VoluntarioHabilidad>;
}
