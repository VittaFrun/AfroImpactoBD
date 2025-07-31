import { Repository } from 'typeorm';
import { Evaluacion } from './evaluacion.entity';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
export declare class EvaluacionService {
    private readonly evaluacionRepository;
    constructor(evaluacionRepository: Repository<Evaluacion>);
    findAll(): Promise<Evaluacion[]>;
    findOne(id: number): Promise<Evaluacion>;
    create(createEvaluacionDto: CreateEvaluacionDto): Promise<Evaluacion>;
    update(id: number, updateEvaluacionDto: UpdateEvaluacionDto): Promise<Evaluacion>;
    remove(id: number): Promise<void>;
}
