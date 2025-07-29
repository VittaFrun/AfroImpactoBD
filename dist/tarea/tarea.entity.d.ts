import { Estado } from '../estado/estado.entity';
import { Fase } from '../fase/fase.entity';
import { Asignacion } from '../asignacion/asignacion.entity';
import { Movimiento } from '../movimiento/movimiento.entity';
export declare class Tarea {
    id_tarea: number;
    descripcion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    estado: Estado;
    fase: Fase;
    asignaciones: Asignacion[];
    movimientos: Movimiento[];
}
