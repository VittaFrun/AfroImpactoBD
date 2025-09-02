import { Repository } from 'typeorm';
import { Evaluacion } from './evaluacion.entity';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { Usuario } from '../users/user.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
export declare class EvaluacionService {
    private readonly repo;
    private readonly proyectoRepo;
    private readonly orgRepo;
    private readonly voluntarioRepo;
    constructor(repo: Repository<Evaluacion>, proyectoRepo: Repository<Proyecto>, orgRepo: Repository<Organizacion>, voluntarioRepo: Repository<Voluntario>);
    create(dto: CreateEvaluacionDto, user: Usuario): Promise<Evaluacion>;
    findAllByProyecto(idProyecto: number): Promise<Evaluacion[]>;
    findAllByVoluntario(idVoluntario: number, user: Usuario): Promise<Evaluacion[]>;
    private checkOrganizacionOwnership;
}
