import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFiles, ParseIntPipe } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { SolicitudInscripcionService } from './solicitud-inscripcion.service';
import { CreateSolicitudInscripcionDto } from './create-solicitud-inscripcion.dto';
import { UpdateSolicitudInscripcionDto } from './update-solicitud-inscripcion.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Usuario } from '../users/user.entity';
import { DocumentoSolicitudService } from '../documento-solicitud/documento-solicitud.service';
import { VoluntarioService } from '../voluntario/voluntario.service';

@Controller('solicitud-inscripcion')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class SolicitudInscripcionController {
  constructor(
    private readonly service: SolicitudInscripcionService,
    private readonly documentoService: DocumentoSolicitudService,
    private readonly voluntarioService: VoluntarioService,
  ) {}

  @Post()
  @Roles('voluntario')
  @UseInterceptors(FilesInterceptor('documentos', 10))
  async create(
    @Body() dto: CreateSolicitudInscripcionDto,
    @UploadedFiles() files: any[],
    @GetUser() user: Usuario,
  ) {
    // Obtener el voluntario del usuario autenticado
    const voluntario = await this.voluntarioService.findByUserId(user.id_usuario);
    
    // Crear el DTO con el id_voluntario obtenido
    const solicitudDto = {
      ...dto,
      id_voluntario: voluntario.id_voluntario
    };

    const solicitud = await this.service.create(solicitudDto);

    // Si hay archivos, guardarlos
    if (files && files.length > 0) {
      for (const file of files) {
        await this.documentoService.create(
          solicitud.id_solicitud,
          file,
          file.fieldname || 'general'
        );
      }
    }

    return solicitud;
  }

  @Get()
  @Roles('admin', 'organizacion')
  findAll() {
    return this.service.findAll();
  }

  @Get('proyecto/:id')
  @Roles('admin', 'organizacion')
  findByProject(@Param('id', ParseIntPipe) id: number) {
    return this.service.findByProject(id);
  }

  @Get('voluntario/:id')
  @Roles('voluntario', 'admin')
  findByVolunteer(@Param('id', ParseIntPipe) id: number) {
    return this.service.findByVolunteer(id);
  }

  @Get(':id')
  @Roles('admin', 'organizacion', 'voluntario')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Roles('admin', 'organizacion')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSolicitudInscripcionDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @Roles('admin', 'organizacion')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}

