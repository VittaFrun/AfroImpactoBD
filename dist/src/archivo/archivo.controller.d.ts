import { ArchivoService } from './archivo.service';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
export declare class ArchivoController {
    private readonly archivoService;
    constructor(archivoService: ArchivoService);
    findAll(): Promise<import("./archivo.entity").Archivo[]>;
    findOne(id: string): Promise<import("./archivo.entity").Archivo>;
    create(createArchivoDto: CreateArchivoDto): Promise<import("./archivo.entity").Archivo>;
    update(id: string, updateArchivoDto: UpdateArchivoDto): Promise<import("./archivo.entity").Archivo>;
    remove(id: string): Promise<void>;
}
