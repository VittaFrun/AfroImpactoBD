import { TareaService } from './tarea.service';
import { CreateTareaDto } from './create-tarea.dto';
import { UpdateTareaDto } from './update-tarea.dto';
export declare class TareaController {
    private readonly service;
    constructor(service: TareaService);
    create(dto: CreateTareaDto): Promise<CreateTareaDto & import("./tarea.entity").Tarea>;
    findAll(): Promise<import("./tarea.entity").Tarea[]>;
    findOne(id: string): Promise<import("./tarea.entity").Tarea>;
    update(id: string, dto: UpdateTareaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
