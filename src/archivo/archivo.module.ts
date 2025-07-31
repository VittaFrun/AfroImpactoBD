import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archivo } from './archivo.entity';
import { ArchivoService } from './archivo.service';
import { ArchivoController } from './archivo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Archivo])],
  providers: [ArchivoService],
  controllers: [ArchivoController],
})
export class ArchivoModule {}
