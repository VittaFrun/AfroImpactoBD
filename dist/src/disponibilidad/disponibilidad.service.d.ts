import { Repository } from 'typeorm';
import { Disponibilidad } from './disponibilidad.entity';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
export declare class DisponibilidadService {
    private readonly disponibilidadRepository;
    constructor(disponibilidadRepository: Repository<Disponibilidad>);
    findAll(): Promise<Disponibilidad[]>;
    findOne(id: number): Promise<Disponibilidad>;
    create(createDisponibilidadDto: CreateDisponibilidadDto): Promise<Disponibilidad>;
    update(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<Disponibilidad>;
    remove(id: number): Promise<void>;
}
