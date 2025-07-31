import { Repository } from 'typeorm';
import { Rol } from './rol.entity';
import { CreateRolDto } from './create-rol.dto';
import { UpdateRolDto } from './update-rol.dto';
export declare class RolService {
    private readonly repo;
    constructor(repo: Repository<Rol>);
    create(dto: CreateRolDto): Promise<CreateRolDto & Rol>;
    findAll(): Promise<Rol[]>;
    findOne(id: number): Promise<Rol>;
    update(id: number, dto: UpdateRolDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
