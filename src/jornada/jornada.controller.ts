import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JornadaService } from './jornada.service';
import { CreateJornadaDto } from './create-jornada.dto';
import { UpdateJornadaDto } from './update-jornada.dto';

@Controller('jornada')
export class JornadaController {
  constructor(private readonly service: JornadaService) {}

  @Post()
  create(@Body() dto: CreateJornadaDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateJornadaDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
