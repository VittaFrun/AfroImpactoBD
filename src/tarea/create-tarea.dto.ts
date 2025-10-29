import { IsString, IsNotEmpty, IsDateString, IsNumber, IsEnum, Length, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTareaDto {
  @IsString()
  @IsNotEmpty()
  @Length(10, 1000, { message: 'La descripción debe tener entre 10 y 1000 caracteres' })
  descripcion: string;

  @IsDateString({}, { message: 'La fecha de inicio debe ser una fecha válida' })
  @IsNotEmpty()
  fecha_inicio: string;

  @IsDateString({}, { message: 'La fecha de fin debe ser una fecha válida' })
  @IsNotEmpty()
  fecha_fin: string;

  @IsEnum(['Alta', 'Media', 'Baja'], { message: 'La prioridad debe ser Alta, Media o Baja' })
  @IsNotEmpty()
  prioridad: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 100, { message: 'La complejidad debe tener entre 3 y 100 caracteres' })
  complejidad: string;

  @IsNumber({}, { message: 'El ID del estado debe ser un número válido' })
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  id_estado: number;

  @IsNumber({}, { message: 'El ID de la fase debe ser un número válido' })
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  id_fase: number;
}