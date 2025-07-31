import { IsEmail, IsNotEmpty, MinLength, IsString, IsIn } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  contraseña: string;

  id_rol: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['voluntario', 'organizacion'])
  tipo_usuario: 'voluntario' | 'organizacion';
}
