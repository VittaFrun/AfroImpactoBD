import { Donacion } from '../donacion/donacion.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
export declare class DonacionProyecto {
    id_donacion_proyecto: number;
    id_donacion: number;
    donacion: Donacion;
    id_proyecto: number;
    proyecto: Proyecto;
    monto_asignado: number;
}
