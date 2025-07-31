export class CreateTareaDto {
  descripcion: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  prioridad: string;
  complejidad: string;
  id_estado: number;
  id_fase: number;
}
