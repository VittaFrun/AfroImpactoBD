import { IsInt, IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateEvaluacionDto {
  @IsInt()
  @IsOptional()
  puntuacion?: number;

  @IsString()
  @IsOptional()
  comentario?: string;

  @IsDateString()
  @IsOptional()
  fecha?: string;
}
