import { IsEmail, IsNotEmpty, MinLength, IsString, IsIn } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['voluntario', 'organizacion'])
  tipo_usuario: 'voluntario' | 'organizacion';
}
