import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { Usuario } from '../users/user.entity';
export declare class AsignacionController {
    private readonly service;
    constructor(service: AsignacionService);
    create(dto: CreateAsignacionDto, user: Usuario): Promise<import("./asignacion.entity").Asignacion>;
    findAllByTarea(idTarea: string): Promise<import("./asignacion.entity").Asignacion[]>;
    findMyTasks(user: Usuario): Promise<import("./asignacion.entity").Asignacion[]>;
    findAsignacionesByProyecto(idProyecto: string, user: Usuario): Promise<import("./asignacion.entity").Asignacion[]>;
    remove(id: string, user: Usuario): Promise<import("./asignacion.entity").Asignacion>;
}
