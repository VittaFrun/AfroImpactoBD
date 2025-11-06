import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './rol.entity';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Asignacion } from '../asignacion/asignacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol, Organizacion, Proyecto, Asignacion])],
  controllers: [RolController],
  providers: [RolService],
  exports: [RolService],
})
export class RolModule {}
