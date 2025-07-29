import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
export declare class ProyectoService {
    private readonly repo;
    constructor(repo: Repository<Proyecto>);
    create(dto: CreateProyectoDto): Promise<Proyecto>;
    findAll(): Promise<Proyecto[]>;
    findOne(id: number): Promise<Proyecto>;
    update(id: number, dto: UpdateProyectoDto): Promise<Proyecto>;
    remove(id: number): Promise<Proyecto>;
}
