import { Tarea } from '../tarea/tarea.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
export declare class Asignacion {
    id_asignacion: number;
    tarea: Tarea;
    voluntario: Voluntario;
    rol_asignado: string;
}
