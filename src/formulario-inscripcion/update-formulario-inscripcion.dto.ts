import { PartialType } from '@nestjs/mapped-types';
import { CreateFormularioInscripcionDto } from './create-formulario-inscripcion.dto';

export class UpdateFormularioInscripcionDto extends PartialType(CreateFormularioInscripcionDto) {}

