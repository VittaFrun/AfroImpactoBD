import { PartialType } from '@nestjs/mapped-types';
import { CreateHorasVoluntariadasDto } from './create-horas-voluntariadas.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateHorasVoluntariadasDto extends PartialType(CreateHorasVoluntariadasDto) {
  @IsBoolean()
  @IsOptional()
  verificada?: boolean;
}

