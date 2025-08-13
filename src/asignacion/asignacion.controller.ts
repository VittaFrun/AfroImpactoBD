import { Controller, Post, Body, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Usuario } from '../users/user.entity';

@Controller('asignacion')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class AsignacionController {
  constructor(private readonly service: AsignacionService) {}

  @Post()
  @Roles('organizacion', 'admin')
  create(@Body() dto: CreateAsignacionDto, @GetUser() user: Usuario) {
    return this.service.create(dto, user);
  }

  @Get('tarea/:idTarea')
  @Roles('organizacion', 'admin')
  findAllByTarea(@Param('idTarea') idTarea: string) {
    return this.service.findAllByTarea(+idTarea);
  }

  @Get('voluntario/mis-tareas')
  @Roles('voluntario')
  findMyTasks(@GetUser() user: Usuario) {
    return this.service.findTasksByVoluntario(user.id_usuario);
  }

  @Delete(':id')
  @Roles('organizacion', 'admin')
  remove(@Param('id') id: string, @GetUser() user: Usuario) {
    return this.service.remove(+id, user);
  }
}
