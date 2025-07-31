import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateArchivoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  ruta: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsInt()
  @IsNotEmpty()
  id_referencia: number;

  @IsString()
  @IsNotEmpty()
  tipo_referencia: string;
}
