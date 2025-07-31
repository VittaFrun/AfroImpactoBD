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

    const isMatch = await bcrypt.compare(pass, user.contraseña);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = { sub: user.id_usuario, email: user.correo };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  //Registra un nuevo usuario
  async register(registerDto: RegisterUserDto) {
    const existingUser = await this.usersService.findOneByEmail(
      registerDto.correo,
    );
    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está en uso');
    }

    const hashedPassword = await bcrypt.hash(registerDto.contraseña, 10);

    const newUser = await this.usersService.create({
      nombre: registerDto.nombre,
      correo: registerDto.correo,
      contraseña: hashedPassword,
      tipo_usuario: registerDto.tipo_usuario,
      id_rol: registerDto.id_rol,
    });

    if (registerDto.tipo_usuario === 'voluntario') {
      await this.voluntarioService.createBasic(newUser.id_usuario);
    } else if (registerDto.tipo_usuario === 'organizacion') {
      await this.organizacionService.createBasic(newUser.id_usuario, registerDto.nombre, registerDto.tipo_usuario);
    }

    //Devuelve el usuario creado sin la contraseña
    const { contraseña, ...result } = newUser;
    return result;
  }
}