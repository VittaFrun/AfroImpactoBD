import { Repository } from 'typeorm';
import { Voluntario } from './voluntario.entity';
import { CreateVoluntarioDto } from './create-voluntario.dto';
import { UpdateVoluntarioDto } from './update-voluntario.dto';
import { Usuario } from '../users/user.entity';
export declare class VoluntarioService {
    private readonly repo;
    private readonly usuarioRepo;
    constructor(repo: Repository<Voluntario>, usuarioRepo: Repository<Usuario>);
    create(dto: CreateVoluntarioDto): Promise<CreateVoluntarioDto & Voluntario>;
    createBasic(id_usuario: number): Promise<Voluntario>;
    findAll(): Promise<Voluntario[]>;
    findOne(id: number): Promise<Voluntario>;
    findByUserId(id_usuario: number): Promise<Voluntario>;
    updateByUserId(id_usuario: number, dto: UpdateVoluntarioDto): Promise<Voluntario>;
    update(id: number, dto: UpdateVoluntarioDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
