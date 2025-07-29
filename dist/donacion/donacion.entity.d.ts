import { Organizacion } from '../organizacion/organizacion.entity';
import { Estado } from '../estado/estado.entity';
import { DonacionProyecto } from '../donacion-proyecto/donacion-proyecto.entity';
import { Movimiento } from '../movimiento/movimiento.entity';
export declare class Donacion {
    id_donacion: number;
    organizacion: Organizacion;
    monto_total: number;
    fecha: Date;
    condiciones: string;
    estado: Estado;
    donacionProyectos: DonacionProyecto[];
    movimientos: Movimiento[];
}
