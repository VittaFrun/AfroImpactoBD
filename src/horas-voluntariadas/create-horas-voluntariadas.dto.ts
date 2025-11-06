import { IsNumber, IsNotEmpty, IsDateString, IsString, IsOptional, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateHorasVoluntariadasDto {
  @IsNumber()
  @IsNotEmpty()
  id_proyecto: number;

  @IsNumber()
  @IsOptional()
  id_tarea?: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0.01)
  @Max(24)
  @Transform(({ value }) => parseFloat(value))
  horas_trabajadas: number;

  @IsString()
  @IsOptional()
  descripcion?: string;
}

