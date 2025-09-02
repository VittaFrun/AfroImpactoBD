import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
import { Usuario } from '../users/user.entity';
export declare class ProyectoController {
    private readonly service;
    constructor(service: ProyectoService);
    create(dto: CreateProyectoDto, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    findAll(user: Usuario): Promise<import("./proyecto.entity").Proyecto[]>;
    findOne(id: string): Promise<import("./proyecto.entity").Proyecto>;
    update(id: string, dto: UpdateProyectoDto, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    remove(id: string, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
}
