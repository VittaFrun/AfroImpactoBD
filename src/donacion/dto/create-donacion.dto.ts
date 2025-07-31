export class CreateDonacionDto {
  id_organizacion: number;
  id_metodo: number;
  monto_total: number;
  fecha: Date;
  condiciones: string;
  verificado: boolean;
  id_estado: number;
}
