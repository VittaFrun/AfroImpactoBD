import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';
import { VoluntarioService } from '../voluntario/voluntario.service';
import { OrganizacionService } from '../organizacion/organizacion.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private voluntarioService: VoluntarioService,
    private organizacionService: OrganizacionService,
  ) {}

  //Loguea un usuario y devuelve un token de acceso
  async login(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = {
      sub: user.id_usuario,
      nombre: user.nombre,
      email: user.email,
      tipo_usuario: user.tipo_usuario // <-- AÑADE ESTA LÍNEA
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  //Registra un nuevo usuario
  async register(registerDto: RegisterUserDto) {
    const existingUser = await this.usersService.findOneByEmail(
      registerDto.email,
    );
    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está en uso');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const newUser = await this.usersService.create({
      nombre: registerDto.nombre,
      email: registerDto.email,
      password: hashedPassword,
      tipo_usuario: registerDto.tipo_usuario,
      id_rol: registerDto.id_rol,
    });

    if (registerDto.tipo_usuario === 'voluntario') {
      await this.voluntarioService.createBasic(newUser.id_usuario);
    } else if (registerDto.tipo_usuario === 'organizacion') {
      await this.organizacionService.createBasic(newUser.id_usuario, registerDto.nombre, registerDto.tipo_usuario);
    }

    //Devuelve el usuario creado sin la contraseña
    const { password, ...result } = newUser;
    return result;
  }

  async getDashboardData(userPayload: any) {
    console.log('Fetching initial dashboard data for user:', userPayload.sub);

    return {
      metrics: [
        { title: "Proyectos Activos", value: "0", icon: "mdi-folder-heart", color: "primary" },
        { title: "Voluntarios", value: "0", icon: "mdi-account-group", color: "success" },
        { title: "Donaciones (Este Mes)", value: "$0", icon: "mdi-cash-multiple", color: "warning" },
        { title: "Tareas Pendientes", value: "0", icon: "mdi-format-list-checks", color: "error" }
      ],
      recentActivities: [], 
      upcomingTasks: [],  
      projectStatusData: [],
      donationTrendData: [] 
    };
  }
}