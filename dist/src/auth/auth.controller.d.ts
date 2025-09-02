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
        email: string;
        id_rol: number | null;
        rol: import("../rol/rol.entity").Rol;
        tipo_usuario: string;
        creado_en: Date;
        actualizado_en: Date;
        voluntario: import("../voluntario/voluntario.entity").Voluntario;
        organizacion: import("../organizacion/organizacion.entity").Organizacion;
    }>;
}
