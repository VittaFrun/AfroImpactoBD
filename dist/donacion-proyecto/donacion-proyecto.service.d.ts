import { Repository } from 'typeorm';
import { DonacionProyecto } from './donacion-proyecto.entity';
import { CreateDonacionProyectoDto } from './create-donacion-proyecto.dto';
import { UpdateDonacionProyectoDto } from './update-donacion-proyecto.dto';
export declare class DonacionProyectoService {
    private readonly repo;
    constructor(repo: Repository<DonacionProyecto>);
    create(dto: CreateDonacionProyectoDto): Promise<CreateDonacionProyectoDto & DonacionProyecto>;
    findAll(): Promise<DonacionProyecto[]>;
    findOne(id: number): Promise<DonacionProyecto>;
    update(id: number, dto: UpdateDonacionProyectoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
