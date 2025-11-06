import { IsEnum, IsNumber, IsOptional, IsString, IsBoolean, Min, Max } from 'class-validator';

export class CreateProyectoBeneficioDto {
  @IsNumber()
  id_proyecto: number;

  @IsEnum(['volunteer', 'stipend', 'salary', 'honorarium'])
  @IsOptional()
  tipo_pago?: 'volunteer' | 'stipend' | 'salary' | 'honorarium';

  @IsNumber()
  @Min(0)
  @IsOptional()
  monto?: number;

  @IsEnum(['none', 'monthly', 'weekly', 'project'])
  @IsOptional()
  frecuencia?: 'none' | 'monthly' | 'weekly' | 'project';

  @IsString()
  @IsOptional()
  descripcion_pago?: string;

  @IsBoolean()
  @IsOptional()
  incluye_transporte?: boolean;

  @IsBoolean()
  @IsOptional()
  incluye_alimentacion?: boolean;

  @IsBoolean()
  @IsOptional()
  incluye_materiales?: boolean;

  @IsBoolean()
  @IsOptional()
  incluye_seguro?: boolean;
}

