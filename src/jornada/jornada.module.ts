import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jornada } from './jornada.entity';
import { JornadaService } from './jornada.service';
import { JornadaController } from './jornada.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Jornada])],
  controllers: [JornadaController],
  providers: [JornadaService],
})
export class JornadaModule {}
