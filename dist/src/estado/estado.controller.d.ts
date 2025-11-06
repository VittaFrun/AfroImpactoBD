import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './create-estado.dto';
import { UpdateEstadoDto } from './update-estado.dto';
export declare class EstadoController {
    private readonly service;
    constructor(service: EstadoService);
    create(dto: CreateEstadoDto): Promise<import("./estado.entity").Estado>;
    findAll(): Promise<import("./estado.entity").Estado[]>;
    findOne(id: string): Promise<import("./estado.entity").Estado>;
    update(id: string, dto: UpdateEstadoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
