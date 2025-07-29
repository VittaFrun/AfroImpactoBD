import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { VoluntarioModule } from '../voluntario/voluntario.module';
import { OrganizacionModule } from '../organizacion/organizacion.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'tu_secreto_jwt', // Cambia esto en producción
      signOptions: { expiresIn: '60m' },
    }),
    VoluntarioModule,
    OrganizacionModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
