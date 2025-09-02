import { Repository } from 'typeorm';
import { Asignacion } from './asignacion.entity';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { Usuario } from '../users/user.entity';
import { Tarea } from '../tarea/tarea.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
export declare class AsignacionService {
    private readonly repo;
    private readonly tareaRepo;
    private readonly proyectoRepo;
    private readonly orgRepo;
    private readonly voluntarioRepo;
    constructor(repo: Repository<Asignacion>, tareaRepo: Repository<Tarea>, proyectoRepo: Repository<Proyecto>, orgRepo: Repository<Organizacion>, voluntarioRepo: Repository<Voluntario>);
    create(dto: CreateAsignacionDto, user: Usuario): Promise<Asignacion>;
    findAllByTarea(idTarea: number): Promise<Asignacion[]>;
    findTasksByVoluntario(id_usuario: number): Promise<Asignacion[]>;
    remove(id: number, user: Usuario): Promise<Asignacion>;
    private checkOrganizacionOwnership;
}
