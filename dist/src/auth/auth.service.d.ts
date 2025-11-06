import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { VoluntarioService } from '../voluntario/voluntario.service';
import { OrganizacionService } from '../organizacion/organizacion.service';
import { ProyectoService } from '../proyecto/proyecto.service';
import { DonacionService } from '../donacion/donacion.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private voluntarioService;
    private organizacionService;
    private proyectoService;
    private donacionService;
    constructor(usersService: UsersService, jwtService: JwtService, voluntarioService: VoluntarioService, organizacionService: OrganizacionService, proyectoService: ProyectoService, donacionService: DonacionService);
    login(email: string, pass: string): Promise<{
        access_token: string;
    }>;
    register(registerDto: RegisterUserDto): Promise<{
        id_usuario: number;
        nombre: string;
        email: string;
        telefono: string;
        id_rol: number | null;
        rol: import("../rol/rol.entity").Rol;
        tipo_usuario: string;
        creado_en: Date;
        actualizado_en: Date;
        voluntario: import("../voluntario/voluntario.entity").Voluntario;
        organizacion: import("../organizacion/organizacion.entity").Organizacion;
        preferencias: import("../preferencia-usuario/preferencia-usuario.entity").PreferenciaUsuario[];
        configuracionesSeguridad: import("../configuracion-seguridad/configuracion-seguridad.entity").ConfiguracionSeguridad[];
        integraciones: import("../integracion/integracion.entity").Integracion[];
    }>;
    getDashboardData(userPayload: any): Promise<{
        metrics: any[];
        recentActivities: any[];
        upcomingTasks: any[];
        projectStatusData: any[];
        donationTrendData: any[];
    }>;
}
