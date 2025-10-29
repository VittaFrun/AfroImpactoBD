import { Repository } from 'typeorm';
import { Organizacion } from './organizacion.entity';
import { CreateOrganizacionDto } from './create-organizacion.dto';
import { UpdateOrganizacionDto } from './update-organizacion.dto';
import { Usuario } from '../users/user.entity';
export declare class OrganizacionService {
    private readonly repo;
    private readonly usuarioRepo;
    constructor(repo: Repository<Organizacion>, usuarioRepo: Repository<Usuario>);
    createBasic(id_usuario: number, nombre: string, tipo: string): Promise<Organizacion>;
    create(dto: CreateOrganizacionDto): Promise<CreateOrganizacionDto & Organizacion>;
    findAll(): Promise<Organizacion[]>;
    findOne(id: number): Promise<Organizacion>;
    findByUserId(id_usuario: number): Promise<Organizacion>;
    update(id: number, dto: UpdateOrganizacionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
