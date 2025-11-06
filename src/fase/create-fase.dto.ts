import { IsString, IsNotEmpty, IsNumber, Length, Min, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateFaseDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100, { message: 'El nombre debe tener entre 3 y 100 caracteres' })
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 1000, { message: 'La descripción debe tener entre 1 y 1000 caracteres' })
  descripcion: string;

  @IsNumber({}, { message: 'El orden debe ser un número válido' })
  @IsNotEmpty()
  @Min(1, { message: 'El orden debe ser mayor a 0' })
  @Transform(({ value }) => parseInt(value))
  orden: number;

  // id_proyecto es opcional porque se toma del parámetro de la URL
  @IsNumber({}, { message: 'El ID del proyecto debe ser un número válido' })
  @IsOptional()
  @Transform(({ value }) => value ? parseInt(value) : undefined)
  id_proyecto?: number;
}