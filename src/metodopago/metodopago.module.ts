import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPago } from './metodopago.entity';
import { MetodoPagoService } from './metodopago.service';
import { MetodoPagoController } from './metodopago.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoPago])],
  providers: [MetodoPagoService],
  controllers: [MetodoPagoController],
})
export class MetodoPagoModule {}
