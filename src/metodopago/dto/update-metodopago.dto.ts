import { IsString, IsOptional } from 'class-validator';

export class UpdateMetodoPagoDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}
