import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
export declare class ProyectoController {
    private readonly service;
    constructor(service: ProyectoService);
    create(dto: CreateProyectoDto): Promise<import("./proyecto.entity").Proyecto>;
    findAll(): Promise<import("./proyecto.entity").Proyecto[]>;
    findOne(id: string): Promise<import("./proyecto.entity").Proyecto>;
    update(id: string, dto: UpdateProyectoDto): Promise<import("./proyecto.entity").Proyecto>;
    remove(id: string): Promise<import("./proyecto.entity").Proyecto>;
}
