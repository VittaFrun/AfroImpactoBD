import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { HorasVoluntariadasService } from './horas-voluntariadas.service';
import { CreateHorasVoluntariadasDto } from './create-horas-voluntariadas.dto';
import { UpdateHorasVoluntariadasDto } from './update-horas-voluntariadas.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Usuario } from '../users/user.entity';

@Controller('horas-voluntariadas')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class HorasVoluntariadasController {
  constructor(private readonly service: HorasVoluntariadasService) {}

  @Post()
  @Roles('voluntario')
  create(@Body() dto: CreateHorasVoluntariadasDto, @GetUser() user: Usuario) {
    return this.service.create(dto, user);
  }

  @Get('voluntario')
  @Roles('voluntario')
  findAllByVolunteer(@GetUser() user: Usuario) {
    return this.service.findAllByVolunteer(user);
  }

  @Get('proyecto/:idProyecto')
  @Roles('voluntario')
  findByProject(@Param('idProyecto') idProyecto: string, @GetUser() user: Usuario) {
    return this.service.findByProject(+idProyecto, user);
  }

  @Get('proyecto/:idProyecto/resumen')
  @Roles('voluntario')
  getResumenByProject(@Param('idProyecto') idProyecto: string, @GetUser() user: Usuario) {
    return this.service.getResumenByProject(+idProyecto, user);
  }

  @Get('proyecto/:idProyecto/todas')
  @Roles('organizacion', 'admin')
  findAllByProjectForOrganization(@Param('idProyecto') idProyecto: string, @GetUser() user: Usuario) {
    return this.service.findAllByProjectForOrganization(+idProyecto, user);
  }

  @Patch(':id')
  @Roles('voluntario', 'organizacion', 'admin')
  update(@Param('id') id: string, @Body() dto: UpdateHorasVoluntariadasDto, @GetUser() user: Usuario) {
    return this.service.update(+id, dto, user);
  }

  @Patch(':id/verificar')
  @Roles('organizacion', 'admin')
  verificar(
    @Param('id') id: string,
    @Body() body: { verificada: boolean },
    @GetUser() user: Usuario
  ) {
    return this.service.verificar(+id, body.verificada, user);
  }

  @Delete(':id')
  @Roles('voluntario')
  remove(@Param('id') id: string, @GetUser() user: Usuario) {
    return this.service.remove(+id, user);
  }
}

