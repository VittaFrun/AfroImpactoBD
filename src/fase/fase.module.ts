import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fase } from './fase.entity';
import { FaseService } from './fase.service';
import { FaseController } from './fase.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fase])],
  controllers: [FaseController],
  providers: [FaseService],
})
export class FaseModule {}
