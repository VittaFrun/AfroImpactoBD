import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateDisponibilidadDto {
  @IsNotEmpty()
  id_voluntario: number;

  @IsString()
  @IsNotEmpty()
  dia_semana: string;

  @IsDateString()
  hora_inicio: string;

  @IsDateString()
  hora_fin: string;
}
