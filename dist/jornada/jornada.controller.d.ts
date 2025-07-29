import { JornadaService } from './jornada.service';
import { CreateJornadaDto } from './create-jornada.dto';
import { UpdateJornadaDto } from './update-jornada.dto';
export declare class JornadaController {
    private readonly service;
    constructor(service: JornadaService);
    create(dto: CreateJornadaDto): Promise<CreateJornadaDto & import("./jornada.entity").Jornada>;
    findAll(): Promise<import("./jornada.entity").Jornada[]>;
    findOne(id: string): Promise<import("./jornada.entity").Jornada>;
    update(id: string, dto: UpdateJornadaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
