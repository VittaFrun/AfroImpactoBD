import { Repository } from 'typeorm';
import { Donacion } from './donacion.entity';
import { CreateDonacionDto } from './create-donacion.dto';
import { UpdateDonacionDto } from './update-donacion.dto';
export declare class DonacionService {
    private readonly repo;
    constructor(repo: Repository<Donacion>);
    create(dto: CreateDonacionDto): Promise<CreateDonacionDto & Donacion>;
    findAll(): Promise<Donacion[]>;
    findOne(id: number): Promise<Donacion>;
    update(id: number, dto: UpdateDonacionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
