import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber, IsBoolean, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateRolDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsEnum(['sistema', 'organizacion', 'proyecto'])
  tipo_rol: 'sistema' | 'organizacion' | 'proyecto';

  @IsOptional()
  @IsNumber({}, { message: 'id_organizacion debe ser un número' })
  @Transform(({ value }) => {
    if (value === null || value === undefined || value === '') {
      return undefined;
    }
    const parsed = parseInt(value);
    return isNaN(parsed) ? undefined : parsed;
  })
  id_organizacion?: number;

  @IsOptional()
  @IsNumber({}, { message: 'id_proyecto debe ser un número' })
  @Transform(({ value }) => {
    if (value === null || value === undefined || value === '') {
      return undefined;
    }
    const parsed = parseInt(value);
    return isNaN(parsed) ? undefined : parsed;
  })
  id_proyecto?: number;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true' || value === 1)
  activo?: boolean;
}