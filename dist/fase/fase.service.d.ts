import { Repository } from 'typeorm';
import { Fase } from './fase.entity';
import { CreateFaseDto } from './create-fase.dto';
import { UpdateFaseDto } from './update-fase.dto';
export declare class FaseService {
    private readonly repo;
    constructor(repo: Repository<Fase>);
    create(dto: CreateFaseDto): Promise<CreateFaseDto & Fase>;
    findAll(): Promise<Fase[]>;
    findOne(id: number): Promise<Fase>;
    update(id: number, dto: UpdateFaseDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
