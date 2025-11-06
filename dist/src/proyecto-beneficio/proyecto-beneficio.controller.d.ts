import { ProyectoBeneficioService } from './proyecto-beneficio.service';
import { CreateProyectoBeneficioDto } from './create-proyecto-beneficio.dto';
import { UpdateProyectoBeneficioDto } from './update-proyecto-beneficio.dto';
export declare class ProyectoBeneficioController {
    private readonly service;
    constructor(service: ProyectoBeneficioService);
    create(dto: CreateProyectoBeneficioDto): Promise<import("./proyecto-beneficio.entity").ProyectoBeneficio>;
    findOne(id: string): Promise<import("./proyecto-beneficio.entity").ProyectoBeneficio>;
    update(id: string, dto: UpdateProyectoBeneficioDto): Promise<import("./proyecto-beneficio.entity").ProyectoBeneficio>;
    remove(id: string): Promise<import("./proyecto-beneficio.entity").ProyectoBeneficio>;
}
