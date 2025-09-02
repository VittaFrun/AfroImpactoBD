import { Repository } from 'typeorm';
import { Donacion } from './donacion.entity';
import { CreateDonacionDto } from './create-donacion.dto';
import { UpdateDonacionDto } from './update-donacion.dto';
import { Usuario } from '../users/user.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
export declare class DonacionService {
    private readonly repo;
    private readonly orgRepo;
    constructor(repo: Repository<Donacion>, orgRepo: Repository<Organizacion>);
    create(dto: CreateDonacionDto, user: Usuario): Promise<Donacion>;
    findAll(): Promise<Donacion[]>;
    findAllByOrganizacion(id_organizacion: number, user: Usuario): Promise<Donacion[]>;
    findOne(id: number, user: Usuario): Promise<Donacion>;
    update(id: number, dto: UpdateDonacionDto, user: Usuario): Promise<Donacion>;
    remove(id: number, user: Usuario): Promise<Donacion>;
    private checkOrganizacionOwnership;
}
