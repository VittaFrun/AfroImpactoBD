import { IsInt, IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateEvaluacionDto {
  @IsInt()
  @IsNotEmpty()
  id_voluntario: number;

  @IsInt()
  @IsNotEmpty()
  id_proyecto: number;

  @IsInt()
  @IsNotEmpty()
  puntuacion: number;

  @IsString()
  @IsNotEmpty()
  comentario: string;

  @IsDateString()
  fecha: string;
}
