import { VoluntarioService } from './voluntario.service';
import { CreateVoluntarioDto } from './create-voluntario.dto';
import { UpdateVoluntarioDto } from './update-voluntario.dto';
export declare class VoluntarioController {
    private readonly service;
    constructor(service: VoluntarioService);
    create(dto: CreateVoluntarioDto): Promise<CreateVoluntarioDto & import("./voluntario.entity").Voluntario>;
    findAll(): Promise<import("./voluntario.entity").Voluntario[]>;
    findOne(id: string): Promise<import("./voluntario.entity").Voluntario>;
    update(id: string, dto: UpdateVoluntarioDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
