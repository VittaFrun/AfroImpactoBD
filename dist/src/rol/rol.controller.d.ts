import { RolService } from './rol.service';
import { CreateRolDto } from './create-rol.dto';
import { UpdateRolDto } from './update-rol.dto';
export declare class RolController {
    private readonly service;
    constructor(service: RolService);
    create(dto: CreateRolDto): Promise<CreateRolDto & import("./rol.entity").Rol>;
    findAll(): Promise<import("./rol.entity").Rol[]>;
    findOne(id: string): Promise<import("./rol.entity").Rol>;
    update(id: string, dto: UpdateRolDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
