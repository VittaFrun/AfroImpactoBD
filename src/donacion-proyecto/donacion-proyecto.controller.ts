import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonacionProyectoService } from './donacion-proyecto.service';
import { CreateDonacionProyectoDto } from './create-donacion-proyecto.dto';
import { UpdateDonacionProyectoDto } from './update-donacion-proyecto.dto';

@Controller('donacion-proyecto')
export class DonacionProyectoController {
  constructor(private readonly service: DonacionProyectoService) {}

  @Post()
  create(@Body() dto: CreateDonacionProyectoDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateDonacionProyectoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
