import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MetodoPagoService } from './metodopago.service';
import { CreateMetodoPagoDto } from './dto/create-metodopago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodopago.dto';

@Controller('metodos-pago')
export class MetodoPagoController {
  constructor(private readonly metodoPagoService: MetodoPagoService) {}

  @Get()
  findAll() {
    return this.metodoPagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metodoPagoService.findOne(+id);
  }

  @Post()
  create(@Body() createMetodoPagoDto: CreateMetodoPagoDto) {
    return this.metodoPagoService.create(createMetodoPagoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMetodoPagoDto: UpdateMetodoPagoDto) {
    return this.metodoPagoService.update(+id, updateMetodoPagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metodoPagoService.remove(+id);
  }
}
