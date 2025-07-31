import { Repository } from 'typeorm';
import { Archivo } from './archivo.entity';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
export declare class ArchivoService {
    private readonly archivoRepository;
    constructor(archivoRepository: Repository<Archivo>);
    findAll(): Promise<Archivo[]>;
    findOne(id: number): Promise<Archivo>;
    create(createArchivoDto: CreateArchivoDto): Promise<Archivo>;
    update(id: number, updateArchivoDto: UpdateArchivoDto): Promise<Archivo>;
    remove(id: number): Promise<void>;
}
