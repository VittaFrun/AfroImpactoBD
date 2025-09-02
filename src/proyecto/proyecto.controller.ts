import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Usuario } from '../users/user.entity';

@Controller('projects') // <-- CORREGIDO
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ProyectoController {
  constructor(private readonly service: ProyectoService) {}

  @Post()
  @Roles('organizacion', 'admin')
  create(@Body() dto: CreateProyectoDto, @GetUser() user: Usuario) {
    return this.service.create(dto, user);
  }

  @Get()
  @Roles('organizacion', 'voluntario', 'admin')
  findAll(@GetUser() user: Usuario) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @Roles('organizacion', 'voluntario', 'admin')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @Roles('organizacion', 'admin')
  update(@Param('id') id: string, @Body() dto: UpdateProyectoDto, @GetUser() user: Usuario) {
    return this.service.update(+id, dto, user);
  }

  @Delete(':id')
  @Roles('organizacion', 'admin')
  remove(@Param('id') id: string, @GetUser() user: Usuario) {
    return this.service.remove(+id, user);
  }
}