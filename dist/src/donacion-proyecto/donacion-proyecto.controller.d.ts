import { DonacionProyectoService } from './donacion-proyecto.service';
import { CreateDonacionProyectoDto } from './create-donacion-proyecto.dto';
import { UpdateDonacionProyectoDto } from './update-donacion-proyecto.dto';
export declare class DonacionProyectoController {
    private readonly service;
    constructor(service: DonacionProyectoService);
    create(dto: CreateDonacionProyectoDto): Promise<CreateDonacionProyectoDto & import("./donacion-proyecto.entity").DonacionProyecto>;
    findAll(): Promise<import("./donacion-proyecto.entity").DonacionProyecto[]>;
    findOne(id: string): Promise<import("./donacion-proyecto.entity").DonacionProyecto>;
    update(id: string, dto: UpdateDonacionProyectoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
