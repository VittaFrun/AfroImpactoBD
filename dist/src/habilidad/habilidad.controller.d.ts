import { HabilidadService } from './habilidad.service';
import { CreateHabilidadDto } from './create-habilidad.dto';
import { UpdateHabilidadDto } from './update-habilidad.dto';
export declare class HabilidadController {
    private readonly service;
    constructor(service: HabilidadService);
    create(dto: CreateHabilidadDto): Promise<CreateHabilidadDto & import("./habilidad.entity").Habilidad>;
    findAll(): Promise<import("./habilidad.entity").Habilidad[]>;
    findOne(id: string): Promise<import("./habilidad.entity").Habilidad>;
    update(id: string, dto: UpdateHabilidadDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
