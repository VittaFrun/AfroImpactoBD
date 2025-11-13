import { Repository } from 'typeorm';
import { Asignacion } from './asignacion.entity';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { Usuario } from '../users/user.entity';
import { Tarea } from '../tarea/tarea.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Rol } from '../rol/rol.entity';
export declare class AsignacionService {
    private readonly repo;
    private readonly tareaRepo;
    private readonly proyectoRepo;
    private readonly orgRepo;
    private readonly voluntarioRepo;
    private readonly rolRepo;
    constructor(repo: Repository<Asignacion>, tareaRepo: Repository<Tarea>, proyectoRepo: Repository<Proyecto>, orgRepo: Repository<Organizacion>, voluntarioRepo: Repository<Voluntario>, rolRepo: Repository<Rol>);
    create(dto: CreateAsignacionDto, user: Usuario): Promise<Asignacion>;
    validateRolForProject(id_rol: number, id_proyecto: number): Promise<boolean>;
    findAllByTarea(idTarea: number): Promise<Asignacion[]>;
    findTasksByVoluntario(id_usuario: number): Promise<Asignacion[]>;
    findAsignacionesByProyecto(id_proyecto: number, id_usuario: number): Promise<Asignacion[]>;
    remove(id: number, user: Usuario): Promise<Asignacion>;
    private checkOrganizacionOwnership;
}
