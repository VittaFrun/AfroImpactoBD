import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voluntario } from './voluntario.entity';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioController } from './voluntario.controller';
import { Usuario } from '../users/user.entity';
import { Estado } from '../estado/estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voluntario, Usuario, Estado])],
  controllers: [VoluntarioController],
  providers: [VoluntarioService],
  exports: [VoluntarioService],
})
export class VoluntarioModule {}
