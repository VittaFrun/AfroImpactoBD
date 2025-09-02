import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { Usuario } from '../users/user.entity';
export declare class EvaluacionController {
    private readonly service;
    constructor(service: EvaluacionService);
    create(dto: CreateEvaluacionDto, user: Usuario): Promise<import("./evaluacion.entity").Evaluacion>;
    findAllByProyecto(idProyecto: string): Promise<import("./evaluacion.entity").Evaluacion[]>;
    findAllByVoluntario(idVoluntario: string, user: Usuario): Promise<import("./evaluacion.entity").Evaluacion[]>;
}
