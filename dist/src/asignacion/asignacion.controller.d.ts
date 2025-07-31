import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { UpdateAsignacionDto } from './update-asignacion.dto';
export declare class AsignacionController {
    private readonly service;
    constructor(service: AsignacionService);
    create(dto: CreateAsignacionDto): Promise<CreateAsignacionDto & import("./asignacion.entity").Asignacion>;
    findAll(): Promise<import("./asignacion.entity").Asignacion[]>;
    findOne(id: string): Promise<import("./asignacion.entity").Asignacion>;
    update(id: string, dto: UpdateAsignacionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
