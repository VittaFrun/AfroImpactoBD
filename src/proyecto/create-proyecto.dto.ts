import { IsString, IsNotEmpty, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateProyectoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  objetivo: string;

  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_inicio: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_fin: string;

  @IsString()
  @IsOptional()
  imagen_principal?: string;

  @IsNumber()
  @IsNotEmpty()
  id_estado: number;
}
