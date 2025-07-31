import { Repository } from 'typeorm';
import { Tarea } from './tarea.entity';
import { CreateTareaDto } from './create-tarea.dto';
import { UpdateTareaDto } from './update-tarea.dto';
export declare class TareaService {
    private readonly repo;
    constructor(repo: Repository<Tarea>);
    create(dto: CreateTareaDto): Promise<CreateTareaDto & Tarea>;
    findAll(): Promise<Tarea[]>;
    findOne(id: number): Promise<Tarea>;
    update(id: number, dto: UpdateTareaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
