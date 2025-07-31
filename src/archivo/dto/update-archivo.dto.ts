import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateArchivoDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  ruta?: string;

  @IsString()
  @IsOptional()
  tipo?: string;

  @IsInt()
  @IsOptional()
  id_referencia?: number;

  @IsString()
  @IsOptional()
  tipo_referencia?: string;
}
