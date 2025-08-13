import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Usuario } from '../users/user.entity';

@Controller('evaluacion')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class EvaluacionController {
  constructor(private readonly service: EvaluacionService) {}

  @Post()
  @Roles('organizacion', 'admin')
  create(@Body() dto: CreateEvaluacionDto, @GetUser() user: Usuario) {
    return this.service.create(dto, user);
  }

  @Get('proyecto/:idProyecto')
  @Roles('organizacion', 'admin')
  findAllByProyecto(@Param('idProyecto') idProyecto: string) {
    return this.service.findAllByProyecto(+idProyecto);
  }

  @Get('voluntario/:idVoluntario')
  @Roles('organizacion', 'admin', 'voluntario')
  findAllByVoluntario(@Param('idVoluntario') idVoluntario: string, @GetUser() user: Usuario) {
    return this.service.findAllByVoluntario(+idVoluntario, user);
  }
}
