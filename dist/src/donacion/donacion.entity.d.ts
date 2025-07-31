import { Organizacion } from '../organizacion/organizacion.entity';
import { Estado } from '../estado/estado.entity';
import { DonacionProyecto } from '../donacion-proyecto/donacion-proyecto.entity';
import { Movimiento } from '../movimiento/movimiento.entity';
import { MetodoPago } from '../metodopago/metodopago.entity';
export declare class Donacion {
    id_donacion: number;
    id_organizacion: number;
    organizacion: Organizacion;
    id_metodo: number;
    metodoPago: MetodoPago;
    monto_total: number;
    fecha: Date;
    condiciones: string;
    verificado: boolean;
    id_estado: number;
    estado: Estado;
    donacionProyectos: DonacionProyecto[];
    movimientos: Movimiento[];
}
