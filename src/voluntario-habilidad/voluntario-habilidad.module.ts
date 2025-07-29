import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoluntarioHabilidad } from './voluntario-habilidad.entity';
import { VoluntarioHabilidadService } from './voluntario-habilidad.service';
import { VoluntarioHabilidadController } from './voluntario-habilidad.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VoluntarioHabilidad])],
  controllers: [VoluntarioHabilidadController],
  providers: [VoluntarioHabilidadService],
})
export class VoluntarioHabilidadModule {}
