import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabilidadService } from './habilidad.service';
import { CreateHabilidadDto } from './create-habilidad.dto';
import { UpdateHabilidadDto } from './update-habilidad.dto';

@Controller('habilidad')
export class HabilidadController {
  constructor(private readonly service: HabilidadService) {}

  @Post()
  create(@Body() dto: CreateHabilidadDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateHabilidadDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
