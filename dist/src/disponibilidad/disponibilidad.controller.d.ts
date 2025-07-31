import { DisponibilidadService } from './disponibilidad.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
export declare class DisponibilidadController {
    private readonly disponibilidadService;
    constructor(disponibilidadService: DisponibilidadService);
    findAll(): Promise<import("./disponibilidad.entity").Disponibilidad[]>;
    findOne(id: string): Promise<import("./disponibilidad.entity").Disponibilidad>;
    create(createDisponibilidadDto: CreateDisponibilidadDto): Promise<import("./disponibilidad.entity").Disponibilidad>;
    update(id: string, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<import("./disponibilidad.entity").Disponibilidad>;
    remove(id: string): Promise<void>;
}
