import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Usuario } from './user.entity';
import { Rol } from '../rol/rol.entity';
import { PreferenciaUsuario } from '../preferencia-usuario/preferencia-usuario.entity';
import { ConfiguracionSeguridad } from '../configuracion-seguridad/configuracion-seguridad.entity';
import { Integracion } from '../integracion/integracion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Rol, PreferenciaUsuario, ConfiguracionSeguridad, Integracion])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
