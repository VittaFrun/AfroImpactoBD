import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { CreateTareaDto } from './create-tarea.dto';
import { UpdateTareaDto } from './update-tarea.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Usuario } from '../users/user.entity';

@Controller('tarea')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class TareaController {
  constructor(private readonly service: TareaService) {}

  @Post()
  @Roles('organizacion', 'admin')
  create(@Body() dto: CreateTareaDto, @GetUser() user: Usuario) {
    return this.service.create(dto, user);
  }

  @Get('proyecto/:idProyecto')
  @Roles('organizacion', 'voluntario', 'admin')
  findAllByProyecto(@Param('idProyecto') idProyecto: string) {
    return this.service.findAllByProyecto(+idProyecto);
  }

  @Get(':id')
  @Roles('organizacion', 'voluntario', 'admin')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @Roles('organizacion', 'admin', 'voluntario')
  update(@Param('id') id: string, @Body() dto: UpdateTareaDto, @GetUser() user: Usuario) {
    return this.service.update(+id, dto, user);
  }

  @Delete(':id')
  @Roles('organizacion', 'admin')
  remove(@Param('id') id: string, @GetUser() user: Usuario) {
    return this.service.remove(+id, user);
  }
}
