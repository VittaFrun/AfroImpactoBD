import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register(registerDto: RegisterUserDto): Promise<{
        id_usuario: number;
        nombre: string;
        correo: string;
        rol: import("../rol/rol.entity").Rol;
        voluntario: import("../voluntario/voluntario.entity").Voluntario;
        organizacion: import("../organizacion/organizacion.entity").Organizacion;
    }>;
}
