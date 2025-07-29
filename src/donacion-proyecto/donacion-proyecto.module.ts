import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonacionProyecto } from './donacion-proyecto.entity';
import { DonacionProyectoService } from './donacion-proyecto.service';
import { DonacionProyectoController } from './donacion-proyecto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DonacionProyecto])],
  controllers: [DonacionProyectoController],
  providers: [DonacionProyectoService],
})
export class DonacionProyectoModule {}
