import { Repository } from 'typeorm';
import { Reporte } from './reporte.entity';
import { CreateReporteDto } from './create-reporte.dto';
import { UpdateReporteDto } from './update-reporte.dto';
export declare class ReporteService {
    private readonly repo;
    constructor(repo: Repository<Reporte>);
    create(dto: CreateReporteDto): Promise<CreateReporteDto & Reporte>;
    findAll(): Promise<Reporte[]>;
    findOne(id: number): Promise<Reporte>;
    update(id: number, dto: UpdateReporteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
