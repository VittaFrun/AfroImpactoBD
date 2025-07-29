import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';
import { Donacion } from '../donacion/donacion.entity';
export declare class Movimiento {
    id_movimiento: number;
    tipo: string;
    descripcion: string;
    cantidad: number;
    monto: number;
    fecha: Date;
    comprobante: string;
    proyecto: Proyecto;
    tarea: Tarea;
    donacion: Donacion;
}
