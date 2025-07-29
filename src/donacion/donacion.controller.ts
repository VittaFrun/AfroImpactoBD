import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonacionService } from './donacion.service';
import { CreateDonacionDto } from './create-donacion.dto';
import { UpdateDonacionDto } from './update-donacion.dto';

@Controller('donacion')
export class DonacionController {
  constructor(private readonly service: DonacionService) {}

  @Post()
  create(@Body() dto: CreateDonacionDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateDonacionDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
