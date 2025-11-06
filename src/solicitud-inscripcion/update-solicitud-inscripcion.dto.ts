import { IsEnum, IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateSolicitudInscripcionDto {
  @IsEnum(['pendiente', 'aprobada', 'rechazada'])
  @IsOptional()
  estado?: 'pendiente' | 'aprobada' | 'rechazada';

  @IsString()
  @IsOptional()
  notas_organizacion?: string;

  @IsDateString()
  @IsOptional()
  fecha_revision?: string;
}

