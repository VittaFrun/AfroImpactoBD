import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
export declare class EvaluacionController {
    private readonly evaluacionService;
    constructor(evaluacionService: EvaluacionService);
    findAll(): Promise<import("./evaluacion.entity").Evaluacion[]>;
    findOne(id: string): Promise<import("./evaluacion.entity").Evaluacion>;
    create(createEvaluacionDto: CreateEvaluacionDto): Promise<import("./evaluacion.entity").Evaluacion>;
    update(id: string, updateEvaluacionDto: UpdateEvaluacionDto): Promise<import("./evaluacion.entity").Evaluacion>;
    remove(id: string): Promise<void>;
}
