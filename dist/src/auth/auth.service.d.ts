import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { VoluntarioService } from '../voluntario/voluntario.service';
import { OrganizacionService } from '../organizacion/organizacion.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private voluntarioService;
    private organizacionService;
    constructor(usersService: UsersService, jwtService: JwtService, voluntarioService: VoluntarioService, organizacionService: OrganizacionService);
    login(email: string, pass: string): Promise<{
        access_token: string;
    }>;
    register(registerDto: RegisterUserDto): Promise<{
        id_usuario: number;
        nombre: string;
        correo: string;
        id_rol: number;
        rol: import("../rol/rol.entity").Rol;
        tipo_usuario: string;
        creado_en: Date;
        actualizado_en: Date;
        voluntario: import("../voluntario/voluntario.entity").Voluntario;
        organizacion: import("../organizacion/organizacion.entity").Organizacion;
    }>;
}
