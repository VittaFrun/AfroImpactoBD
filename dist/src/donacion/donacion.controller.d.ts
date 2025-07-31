import { DonacionService } from './donacion.service';
import { CreateDonacionDto } from './create-donacion.dto';
import { UpdateDonacionDto } from './update-donacion.dto';
export declare class DonacionController {
    private readonly service;
    constructor(service: DonacionService);
    create(dto: CreateDonacionDto): Promise<CreateDonacionDto & import("./donacion.entity").Donacion>;
    findAll(): Promise<import("./donacion.entity").Donacion[]>;
    findOne(id: string): Promise<import("./donacion.entity").Donacion>;
    update(id: string, dto: UpdateDonacionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
