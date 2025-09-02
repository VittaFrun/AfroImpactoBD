import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { VoluntarioModule } from '../voluntario/voluntario.module';
import { OrganizacionModule } from '../organizacion/organizacion.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DashboardController } from './dashboard.controller';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
    VoluntarioModule,
    OrganizacionModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController, DashboardController],
})
export class AuthModule {}
