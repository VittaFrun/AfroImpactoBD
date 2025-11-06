import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { FormularioInscripcionService } from './formulario-inscripcion.service';
import { CreateFormularioInscripcionDto } from './create-formulario-inscripcion.dto';
import { UpdateFormularioInscripcionDto } from './update-formulario-inscripcion.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('formulario-inscripcion')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class FormularioInscripcionController {
  constructor(private readonly service: FormularioInscripcionService) {}

  @Post()
  @Roles('admin', 'organizacion')
  create(@Body() dto: CreateFormularioInscripcionDto) {
    return this.service.create(dto);
  }

  @Get()
  @Roles('admin', 'organizacion')
  findAll() {
    return this.service.findAll();
  }

  @Get('proyecto/:id')
  @Roles('admin', 'organizacion', 'voluntario')
  findByProject(@Param('id', ParseIntPipe) id: number) {
    return this.service.findByProject(id);
  }

  @Get('proyecto/:id/activos')
  @Roles('admin', 'organizacion', 'voluntario')
  findActiveByProject(@Param('id', ParseIntPipe) id: number) {
    return this.service.findActiveByProject(id);
  }

  @Get('organizacion/:id')
  @Roles('admin', 'organizacion')
  findByOrganization(@Param('id', ParseIntPipe) id: number) {
    return this.service.findByOrganization(id);
  }

  @Get(':id')
  @Roles('admin', 'organizacion')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Roles('admin', 'organizacion')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateFormularioInscripcionDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @Roles('admin', 'organizacion')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }

  @Post('proyecto/:id/reordenar')
  @Roles('admin', 'organizacion')
  reorder(@Param('id', ParseIntPipe) id: number, @Body() ordenes: { id_formulario: number; orden: number }[]) {
    return this.service.reorder(id, ordenes);
  }
}

