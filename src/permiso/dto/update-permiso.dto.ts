import { IsString, IsOptional } from 'class-validator';

export class UpdatePermisoDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}
