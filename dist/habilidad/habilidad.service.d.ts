import { Repository } from 'typeorm';
import { Habilidad } from './habilidad.entity';
import { CreateHabilidadDto } from './create-habilidad.dto';
import { UpdateHabilidadDto } from './update-habilidad.dto';
export declare class HabilidadService {
    private readonly repo;
    constructor(repo: Repository<Habilidad>);
    create(dto: CreateHabilidadDto): Promise<CreateHabilidadDto & Habilidad>;
    findAll(): Promise<Habilidad[]>;
    findOne(id: number): Promise<Habilidad>;
    update(id: number, dto: UpdateHabilidadDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
