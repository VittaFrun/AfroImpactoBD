import { VoluntarioService } from './voluntario.service';
import { UpdateVoluntarioDto } from './update-voluntario.dto';
import { Usuario } from '../users/user.entity';
export declare class VoluntarioController {
    private readonly service;
    constructor(service: VoluntarioService);
    getProfile(user: Usuario): Promise<import("./voluntario.entity").Voluntario>;
    updateProfile(user: Usuario, dto: UpdateVoluntarioDto): Promise<import("./voluntario.entity").Voluntario>;
    findAll(): Promise<import("./voluntario.entity").Voluntario[]>;
    findOne(id: string): Promise<import("./voluntario.entity").Voluntario>;
}
