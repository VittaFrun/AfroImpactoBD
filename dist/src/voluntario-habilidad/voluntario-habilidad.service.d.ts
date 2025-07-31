import { Repository } from 'typeorm';
import { VoluntarioHabilidad } from './voluntario-habilidad.entity';
import { CreateVoluntarioHabilidadDto } from './create-voluntario-habilidad.dto';
import { UpdateVoluntarioHabilidadDto } from './update-voluntario-habilidad.dto';
export declare class VoluntarioHabilidadService {
    private readonly repo;
    constructor(repo: Repository<VoluntarioHabilidad>);
    create(dto: CreateVoluntarioHabilidadDto): Promise<CreateVoluntarioHabilidadDto & VoluntarioHabilidad>;
    findAll(): Promise<VoluntarioHabilidad[]>;
    findOne(id_voluntario: number, id_habilidad: number): Promise<VoluntarioHabilidad>;
    update(id_voluntario: number, id_habilidad: number, dto: UpdateVoluntarioHabilidadDto): Promise<VoluntarioHabilidad>;
    remove(id_voluntario: number, id_habilidad: number): Promise<VoluntarioHabilidad>;
}
