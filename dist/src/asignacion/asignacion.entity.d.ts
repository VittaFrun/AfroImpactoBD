import { Tarea } from '../tarea/tarea.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Rol } from '../rol/rol.entity';
export declare class Asignacion {
    id_asignacion: number;
    id_tarea: number;
    tarea: Tarea;
    id_voluntario: number;
    voluntario: Voluntario;
    id_rol: number;
    rol: Rol;
}
