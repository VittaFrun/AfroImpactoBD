import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';
export declare class Fase {
    id_fase: number;
    nombre: string;
    descripcion: string;
    orden: number;
    proyecto: Proyecto;
    tareas: Tarea[];
}
