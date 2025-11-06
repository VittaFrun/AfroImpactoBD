import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateAsignacionDto {
  @IsNumber()
  @IsNotEmpty()
  id_tarea: number;

  @IsNumber()
  @IsNotEmpty()
  id_voluntario: number;

  @IsNumber()
  @IsNotEmpty()
  id_rol: number;
}