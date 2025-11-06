import { Repository } from 'typeorm';
import { ProyectoBeneficio } from './proyecto-beneficio.entity';
import { CreateProyectoBeneficioDto } from './create-proyecto-beneficio.dto';
import { UpdateProyectoBeneficioDto } from './update-proyecto-beneficio.dto';
import { Proyecto } from '../proyecto/proyecto.entity';
export declare class ProyectoBeneficioService {
    private readonly repo;
    private readonly proyectoRepo;
    constructor(repo: Repository<ProyectoBeneficio>, proyectoRepo: Repository<Proyecto>);
    create(dto: CreateProyectoBeneficioDto): Promise<ProyectoBeneficio>;
    findOne(id_proyecto: number): Promise<ProyectoBeneficio>;
    update(id_proyecto: number, dto: UpdateProyectoBeneficioDto): Promise<ProyectoBeneficio>;
    remove(id_proyecto: number): Promise<ProyectoBeneficio>;
}
