import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProyectoBeneficioService } from './proyecto-beneficio.service';
import { CreateProyectoBeneficioDto } from './create-proyecto-beneficio.dto';
import { UpdateProyectoBeneficioDto } from './update-proyecto-beneficio.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('proyecto-beneficio')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ProyectoBeneficioController {
  constructor(private readonly service: ProyectoBeneficioService) {}

  @Post()
  @Roles('admin', 'organizacion')
  create(@Body() dto: CreateProyectoBeneficioDto) {
    return this.service.create(dto);
  }

  @Get('proyecto/:id')
  @Roles('admin', 'organizacion', 'voluntario')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch('proyecto/:id')
  @Roles('admin', 'organizacion')
  update(@Param('id') id: string, @Body() dto: UpdateProyectoBeneficioDto) {
    return this.service.update(+id, dto);
  }

  @Delete('proyecto/:id')
  @Roles('admin', 'organizacion')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}

