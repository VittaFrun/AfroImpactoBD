import { Repository } from 'typeorm';
import { MetodoPago } from './metodopago.entity';
import { CreateMetodoPagoDto } from './dto/create-metodopago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodopago.dto';
export declare class MetodoPagoService {
    private readonly metodoPagoRepository;
    constructor(metodoPagoRepository: Repository<MetodoPago>);
    findAll(): Promise<MetodoPago[]>;
    findOne(id: number): Promise<MetodoPago>;
    create(createMetodoPagoDto: CreateMetodoPagoDto): Promise<MetodoPago>;
    update(id: number, updateMetodoPagoDto: UpdateMetodoPagoDto): Promise<MetodoPago>;
    remove(id: number): Promise<void>;
}
