import { Repository } from 'typeorm';
import { Jornada } from './jornada.entity';
import { CreateJornadaDto } from './create-jornada.dto';
import { UpdateJornadaDto } from './update-jornada.dto';
export declare class JornadaService {
    private readonly repo;
    constructor(repo: Repository<Jornada>);
    create(dto: CreateJornadaDto): Promise<CreateJornadaDto & Jornada>;
    findAll(): Promise<Jornada[]>;
    findOne(id: number): Promise<Jornada>;
    update(id: number, dto: UpdateJornadaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
