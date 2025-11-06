import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './create-estado.dto';
import { UpdateEstadoDto } from './update-estado.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('estado')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class EstadoController {
  constructor(private readonly service: EstadoService) {}

  @Post()
  @Roles('admin', 'organizacion')
  create(@Body() dto: CreateEstadoDto) {
    return this.service.create(dto);
  }

  @Get()
  @Roles('admin', 'organizacion', 'voluntario')
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @Roles('admin', 'organizacion', 'voluntario')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @Roles('admin', 'organizacion')
  update(@Param('id') id: string, @Body() dto: UpdateEstadoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  @Roles('admin', 'organizacion')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
