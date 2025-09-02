import { DonacionService } from './donacion.service';
import { CreateDonacionDto } from './create-donacion.dto';
import { UpdateDonacionDto } from './update-donacion.dto';
import { Usuario } from '../users/user.entity';
export declare class DonacionController {
    private readonly service;
    constructor(service: DonacionService);
    create(dto: CreateDonacionDto, user: Usuario): Promise<import("./donacion.entity").Donacion>;
    findAll(): Promise<import("./donacion.entity").Donacion[]>;
    findAllByOrganizacion(id: string, user: Usuario): Promise<import("./donacion.entity").Donacion[]>;
    findOne(id: string, user: Usuario): Promise<import("./donacion.entity").Donacion>;
    update(id: string, dto: UpdateDonacionDto, user: Usuario): Promise<import("./donacion.entity").Donacion>;
    remove(id: string, user: Usuario): Promise<import("./donacion.entity").Donacion>;
}
