import { IsEnum, IsString, IsOptional, IsBoolean, IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateFormularioInscripcionDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => value ? parseInt(value) : undefined)
  id_proyecto?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => value ? parseInt(value) : undefined)
  id_organizacion?: number;

  @IsString()
  nombre_campo: string;

  @IsEnum(['text', 'textarea', 'number', 'date', 'select', 'file'])
  tipo_campo: 'text' | 'textarea' | 'number' | 'date' | 'select' | 'file';

  @IsString()
  etiqueta: string;

  @IsString()
  @IsOptional()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true' || value === 1)
  requerido?: boolean;

  @IsString()
  @IsOptional()
  opciones?: string; // JSON string para campos tipo select

  @IsNumber()
  @Min(0)
  @IsOptional()
  @Transform(({ value }) => value ? parseInt(value) : 0)
  orden?: number;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true' || value === 1)
  activo?: boolean;
}

