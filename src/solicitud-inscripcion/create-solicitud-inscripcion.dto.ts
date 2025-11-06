import { IsNumber, IsOptional, IsString, IsEnum, IsDateString, IsArray } from 'class-validator';

export class CreateSolicitudInscripcionDto {
  @IsNumber()
  id_proyecto: number;

  @IsNumber()
  @IsOptional()
  id_voluntario?: number; // Opcional porque se obtiene del usuario autenticado

  @IsString()
  @IsOptional()
  motivacion?: string;

  @IsString()
  @IsOptional()
  disponibilidad?: string;

  @IsString()
  @IsOptional()
  experiencia_relacionada?: string;

  // Campos dinámicos del formulario personalizado
  @IsOptional()
  camposPersonalizados?: Record<string, any>;

  // Archivos adjuntos (se manejarán por separado en el controlador)
  // Nota: Los archivos se manejan mediante FilesInterceptor en el controlador
  @IsOptional()
  documentos?: any[];
}

