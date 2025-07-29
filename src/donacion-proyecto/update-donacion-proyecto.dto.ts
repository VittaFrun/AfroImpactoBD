import { PartialType } from '@nestjs/mapped-types';
import { CreateDonacionProyectoDto } from './create-donacion-proyecto.dto';

export class UpdateDonacionProyectoDto extends PartialType(CreateDonacionProyectoDto) {}
