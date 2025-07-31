import { PermisoService } from './permiso.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
export declare class PermisoController {
    private readonly permisoService;
    constructor(permisoService: PermisoService);
    findAll(): Promise<import("./permiso.entity").Permiso[]>;
    findOne(id: string): Promise<import("./permiso.entity").Permiso>;
    create(createPermisoDto: CreatePermisoDto): Promise<import("./permiso.entity").Permiso>;
    update(id: string, updatePermisoDto: UpdatePermisoDto): Promise<import("./permiso.entity").Permiso>;
    remove(id: string): Promise<void>;
}
