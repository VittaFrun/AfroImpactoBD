import { Voluntario } from '../voluntario/voluntario.entity';
import { Donacion } from '../donacion/donacion.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';
export declare class Estado {
    id_estado: number;
    nombre: string;
    voluntarios: Voluntario[];
    donaciones: Donacion[];
    proyectos: Proyecto[];
    tareas: Tarea[];
}
