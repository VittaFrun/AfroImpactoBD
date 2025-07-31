import { Repository } from 'typeorm';
import { Permiso } from './permiso.entity';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
export declare class PermisoService {
    private readonly permisoRepository;
    constructor(permisoRepository: Repository<Permiso>);
    findAll(): Promise<Permiso[]>;
    findOne(id: number): Promise<Permiso>;
    create(createPermisoDto: CreatePermisoDto): Promise<Permiso>;
    update(id: number, updatePermisoDto: UpdatePermisoDto): Promise<Permiso>;
    remove(id: number): Promise<void>;
}
