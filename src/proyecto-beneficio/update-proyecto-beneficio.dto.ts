import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoBeneficioDto } from './create-proyecto-beneficio.dto';

export class UpdateProyectoBeneficioDto extends PartialType(CreateProyectoBeneficioDto) {}

