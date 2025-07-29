import { Repository } from 'typeorm';
import { Movimiento } from './movimiento.entity';
import { CreateMovimientoDto } from './create-movimiento.dto';
import { UpdateMovimientoDto } from './update-movimiento.dto';
export declare class MovimientoService {
    private readonly repo;
    constructor(repo: Repository<Movimiento>);
    create(dto: CreateMovimientoDto): Promise<CreateMovimientoDto & Movimiento>;
    findAll(): Promise<Movimiento[]>;
    findOne(id: number): Promise<Movimiento>;
    update(id: number, dto: UpdateMovimientoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
