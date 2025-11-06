import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voluntario } from './voluntario.entity';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioController } from './voluntario.controller';
import { Usuario } from '../users/user.entity';
import { Estado } from '../estado/estado.entity';
import { Jornada } from '../jornada/jornada.entity';
import { HorasVoluntariadas } from '../horas-voluntariadas/horas-voluntariadas.entity';
import { VoluntarioLogro } from '../voluntario-logro/voluntario-logro.entity';
import { Certificado } from '../certificado/certificado.entity';
import { Logro } from '../logro/logro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voluntario, Usuario, Estado, Jornada, HorasVoluntariadas, VoluntarioLogro, Certificado, Logro])],
  controllers: [VoluntarioController],
  providers: [VoluntarioService],
  exports: [VoluntarioService],
})
export class VoluntarioModule {}
