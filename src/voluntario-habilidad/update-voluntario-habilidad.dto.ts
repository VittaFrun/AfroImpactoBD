import { PartialType } from '@nestjs/mapped-types';
import { CreateVoluntarioHabilidadDto } from './create-voluntario-habilidad.dto';

export class UpdateVoluntarioHabilidadDto extends PartialType(CreateVoluntarioHabilidadDto) {}
