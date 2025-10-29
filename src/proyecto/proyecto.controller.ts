import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './create-proyecto.dto';
import { UpdateProyectoDto } from './update-proyecto.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Usuario } from '../users/user.entity';
import { CreateFaseDto } from '../fase/create-fase.dto';
import { CreateTareaDto } from '../tarea/create-tarea.dto';

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

  // --- ENDPOINTS PARA GESTIONAR FASES ---
  @Get(':id/phases')
  @Roles('organizacion', 'voluntario', 'admin')
  getPhases(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post(':id/phases')
  @Roles('organizacion', 'admin')
  addPhase(@Param('id') id: string, @Body() dto: CreateFaseDto, @GetUser() user: Usuario) {
    return this.service.addFase(+id, dto, user);
  }

  @Put(':id/phases/:phaseId')
  @Roles('organizacion', 'admin')
  updatePhase(
    @Param('id') id: string,
    @Param('phaseId') phaseId: string,
    @Body() dto: Partial<CreateFaseDto>,
    @GetUser() user: Usuario
  ) {
    return this.service.updateFase(+id, +phaseId, dto, user);
  }

  @Delete(':id/phases/:phaseId')
  @Roles('organizacion', 'admin')
  removePhase(
    @Param('id') id: string,
    @Param('phaseId') phaseId: string,
    @GetUser() user: Usuario
  ) {
    return this.service.removeFase(+id, +phaseId, user);
  }

  // --- ENDPOINTS PARA GESTIONAR TAREAS ---
  @Get(':id/tasks')
  @Roles('organizacion', 'voluntario', 'admin')
  getTasks(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post(':id/tasks')
  @Roles('organizacion', 'admin')
  addTask(@Param('id') id: string, @Body() dto: CreateTareaDto, @GetUser() user: Usuario) {
    return this.service.addTarea(+id, dto, user);
  }

  @Put(':id/tasks/:taskId')
  @Roles('organizacion', 'admin')
  updateTask(
    @Param('id') id: string,
    @Param('taskId') taskId: string,
    @Body() dto: Partial<CreateTareaDto>,
    @GetUser() user: Usuario
  ) {
    return this.service.updateTarea(+id, +taskId, dto, user);
  }

  @Delete(':id/tasks/:taskId')
  @Roles('organizacion', 'admin')
  removeTask(
    @Param('id') id: string,
    @Param('taskId') taskId: string,
    @GetUser() user: Usuario
  ) {
    return this.service.removeTarea(+id, +taskId, user);
  }
}