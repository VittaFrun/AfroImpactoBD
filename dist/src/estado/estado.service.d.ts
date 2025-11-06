import { Repository } from 'typeorm';
import { Estado } from './estado.entity';
import { CreateEstadoDto } from './create-estado.dto';
import { UpdateEstadoDto } from './update-estado.dto';
export declare class EstadoService {
    private readonly repo;
    constructor(repo: Repository<Estado>);
    create(dto: CreateEstadoDto): Promise<Estado>;
    findAll(): Promise<Estado[]>;
    findOne(id: number): Promise<Estado>;
    update(id: number, dto: UpdateEstadoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
