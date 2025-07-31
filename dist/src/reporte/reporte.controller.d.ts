import { ReporteService } from './reporte.service';
import { CreateReporteDto } from './create-reporte.dto';
import { UpdateReporteDto } from './update-reporte.dto';
export declare class ReporteController {
    private readonly service;
    constructor(service: ReporteService);
    create(dto: CreateReporteDto): Promise<CreateReporteDto & import("./reporte.entity").Reporte>;
    findAll(): Promise<import("./reporte.entity").Reporte[]>;
    findOne(id: string): Promise<import("./reporte.entity").Reporte>;
    update(id: string, dto: UpdateReporteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
