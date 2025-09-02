import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
import { Usuario } from '../users/user.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
export declare class ProyectoService {
    private readonly repo;
    private readonly orgRepo;
    constructor(repo: Repository<Proyecto>, orgRepo: Repository<Organizacion>);
    create(dto: CreateProyectoDto, user: Usuario): Promise<Proyecto>;
    findAll(user: Usuario): Promise<Proyecto[]>;
    findOne(id: number): Promise<Proyecto>;
    update(id: number, dto: UpdateProyectoDto, user: Usuario): Promise<Proyecto>;
    remove(id: number, user: Usuario): Promise<Proyecto>;
}
