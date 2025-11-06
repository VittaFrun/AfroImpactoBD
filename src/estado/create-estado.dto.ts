import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateEstadoDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50, { message: 'El nombre debe tener entre 3 y 50 caracteres' })
  nombre: string;
}
