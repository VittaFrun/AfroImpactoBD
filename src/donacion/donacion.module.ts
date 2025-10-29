import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donacion } from './donacion.entity';
import { DonacionService } from './donacion.service';
import { DonacionController } from './donacion.controller';
import { Organizacion } from '../organizacion/organizacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donacion, Organizacion])],
  controllers: [DonacionController],
  providers: [DonacionService],
  exports: [DonacionService],
})
export class DonacionModule {}
