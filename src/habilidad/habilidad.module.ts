import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habilidad } from './habilidad.entity';
import { HabilidadService } from './habilidad.service';
import { HabilidadController } from './habilidad.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Habilidad])],
  controllers: [HabilidadController],
  providers: [HabilidadService],
})
export class HabilidadModule {}
