import { IsString, IsNotEmpty, IsNumber, Length, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateFaseDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100, { message: 'El nombre debe tener entre 3 y 100 caracteres' })
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 1000, { message: 'La descripción debe tener entre 10 y 1000 caracteres' })
  descripcion: string;

  @IsNumber({}, { message: 'El orden debe ser un número válido' })
  @IsNotEmpty()
  @Min(1, { message: 'El orden debe ser mayor a 0' })
  @Transform(({ value }) => parseInt(value))
  orden: number;

  @IsNumber({}, { message: 'El ID del proyecto debe ser un número válido' })
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  id_proyecto: number;
}