import { Donacion } from '../donacion/donacion.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
export declare class DonacionProyecto {
    id_donacion_proyecto: number;
    donacion: Donacion;
    proyecto: Proyecto;
    monto_asignado: number;
}
