import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoluntarioHabilidadService } from './voluntario-habilidad.service';
import { CreateVoluntarioHabilidadDto } from './create-voluntario-habilidad.dto';
import { UpdateVoluntarioHabilidadDto } from './update-voluntario-habilidad.dto';

@Controller('voluntario-habilidad')
export class VoluntarioHabilidadController {
  constructor(private readonly service: VoluntarioHabilidadService) {}

  @Post()
  create(@Body() dto: CreateVoluntarioHabilidadDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':idVoluntario/:idHabilidad')
  findOne(@Param('idVoluntario') idVoluntario: string, @Param('idHabilidad') idHabilidad: string) {
    return this.service.findOne(+idVoluntario, +idHabilidad);
  }

  @Patch(':idVoluntario/:idHabilidad')
  update(
    @Param('idVoluntario') idVoluntario: string,
    @Param('idHabilidad') idHabilidad: string,
    @Body() dto: UpdateVoluntarioHabilidadDto,
  ) {
    return this.service.update(+idVoluntario, +idHabilidad, dto);
  }

  @Delete(':idVoluntario/:idHabilidad')
  remove(@Param('idVoluntario') idVoluntario: string, @Param('idHabilidad') idHabilidad: string) {
    return this.service.remove(+idVoluntario, +idHabilidad);
  }
}
