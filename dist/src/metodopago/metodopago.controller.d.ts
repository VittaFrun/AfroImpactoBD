import { MetodoPagoService } from './metodopago.service';
import { CreateMetodoPagoDto } from './dto/create-metodopago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodopago.dto';
export declare class MetodoPagoController {
    private readonly metodoPagoService;
    constructor(metodoPagoService: MetodoPagoService);
    findAll(): Promise<import("./metodopago.entity").MetodoPago[]>;
    findOne(id: string): Promise<import("./metodopago.entity").MetodoPago>;
    create(createMetodoPagoDto: CreateMetodoPagoDto): Promise<import("./metodopago.entity").MetodoPago>;
    update(id: string, updateMetodoPagoDto: UpdateMetodoPagoDto): Promise<import("./metodopago.entity").MetodoPago>;
    remove(id: string): Promise<void>;
}
