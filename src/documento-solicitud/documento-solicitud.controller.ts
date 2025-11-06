import { Controller, Get, Param, Delete, UseGuards, ParseIntPipe, Res } from '@nestjs/common';
import { Response } from 'express';
import { DocumentoSolicitudService } from './documento-solicitud.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('documento-solicitud')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class DocumentoSolicitudController {
  constructor(private readonly service: DocumentoSolicitudService) {}

  @Get('solicitud/:id')
  @Roles('admin', 'organizacion', 'voluntario')
  findBySolicitud(@Param('id', ParseIntPipe) id: number) {
    return this.service.findBySolicitud(id);
  }

  @Get(':id')
  @Roles('admin', 'organizacion', 'voluntario')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Get(':id/download')
  @Roles('admin', 'organizacion', 'voluntario')
  async download(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const documento = await this.service.findOne(id);
    // Aquí implementarías la lógica de descarga del archivo
    // Por ahora solo retornamos la información del documento
    res.send(documento);
  }

  @Delete(':id')
  @Roles('admin', 'organizacion')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}

