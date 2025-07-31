import { Repository } from 'typeorm';
import { Asignacion } from './asignacion.entity';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { UpdateAsignacionDto } from './update-asignacion.dto';
export declare class AsignacionService {
    private readonly repo;
    constructor(repo: Repository<Asignacion>);
    create(dto: CreateAsignacionDto): Promise<CreateAsignacionDto & Asignacion>;
    findAll(): Promise<Asignacion[]>;
    findOne(id: number): Promise<Asignacion>;
    update(id: number, dto: UpdateAsignacionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
