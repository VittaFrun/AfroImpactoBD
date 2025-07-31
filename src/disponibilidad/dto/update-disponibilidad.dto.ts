import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateDisponibilidadDto {
  @IsString()
  @IsOptional()
  dia_semana?: string;

  @IsDateString()
  @IsOptional()
  hora_inicio?: string;

  @IsDateString()
  @IsOptional()
  hora_fin?: string;
}
