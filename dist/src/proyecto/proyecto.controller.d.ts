import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
import { Usuario } from '../users/user.entity';
import { CreateFaseDto } from '../fase/create-fase.dto';
import { CreateTareaDto } from '../tarea/create-tarea.dto';
export declare class ProyectoController {
    private readonly service;
    constructor(service: ProyectoService);
    create(dto: CreateProyectoDto, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    findAll(user: Usuario): Promise<import("./proyecto.entity").Proyecto[]>;
    findOne(id: string): Promise<import("./proyecto.entity").Proyecto>;
    update(id: string, dto: UpdateProyectoDto, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    remove(id: string, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    getPhases(id: string): Promise<import("./proyecto.entity").Proyecto>;
    addPhase(id: string, dto: CreateFaseDto, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    updatePhase(id: string, phaseId: string, dto: Partial<CreateFaseDto>, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    removePhase(id: string, phaseId: string, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    getTasks(id: string): Promise<import("./proyecto.entity").Proyecto>;
    addTask(id: string, dto: CreateTareaDto, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    updateTask(id: string, taskId: string, dto: Partial<CreateTareaDto>, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
    removeTask(id: string, taskId: string, user: Usuario): Promise<import("./proyecto.entity").Proyecto>;
}
