import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'tu_secreto_jwt', // Igual que en JwtModule
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findOneByEmailWithRol(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return { id: user.id_usuario, email: user.correo, rol: user.rol };
  }
}