import { MovimientoService } from './movimiento.service';
import { CreateMovimientoDto } from './create-movimiento.dto';
import { UpdateMovimientoDto } from './update-movimiento.dto';
export declare class MovimientoController {
    private readonly service;
    constructor(service: MovimientoService);
    create(dto: CreateMovimientoDto): Promise<CreateMovimientoDto & import("./movimiento.entity").Movimiento>;
    findAll(): Promise<import("./movimiento.entity").Movimiento[]>;
    findOne(id: string): Promise<import("./movimiento.entity").Movimiento>;
    update(id: string, dto: UpdateMovimientoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
