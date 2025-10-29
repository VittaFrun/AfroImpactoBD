import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
import { Usuario } from '../users/user.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Fase } from '../fase/fase.entity';
import { Tarea } from '../tarea/tarea.entity';
import { CreateFaseDto } from '../fase/create-fase.dto';
import { CreateTareaDto } from '../tarea/create-tarea.dto';
export declare class ProyectoService {
    private readonly repo;
    private readonly orgRepo;
    private readonly faseRepo;
    private readonly tareaRepo;
    constructor(repo: Repository<Proyecto>, orgRepo: Repository<Organizacion>, faseRepo: Repository<Fase>, tareaRepo: Repository<Tarea>);
    create(dto: CreateProyectoDto, user: Usuario): Promise<Proyecto>;
    findAll(user: Usuario): Promise<Proyecto[]>;
    findOne(id: number): Promise<Proyecto>;
    update(id: number, dto: UpdateProyectoDto, user: Usuario): Promise<Proyecto>;
    remove(id: number, user: Usuario): Promise<Proyecto>;
    addFase(proyectoId: number, dto: CreateFaseDto, user: Usuario): Promise<Proyecto>;
    updateFase(proyectoId: number, faseId: number, dto: Partial<CreateFaseDto>, user: Usuario): Promise<Proyecto>;
    removeFase(proyectoId: number, faseId: number, user: Usuario): Promise<Proyecto>;
    addTarea(proyectoId: number, dto: CreateTareaDto, user: Usuario): Promise<Proyecto>;
    updateTarea(proyectoId: number, tareaId: number, dto: Partial<CreateTareaDto>, user: Usuario): Promise<Proyecto>;
    removeTarea(proyectoId: number, tareaId: number, user: Usuario): Promise<Proyecto>;
}
