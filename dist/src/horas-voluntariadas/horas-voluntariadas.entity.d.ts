import { Voluntario } from '../voluntario/voluntario.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';
export declare class HorasVoluntariadas {
    id_horas: number;
    id_voluntario: number;
    voluntario: Voluntario;
    id_proyecto: number;
    proyecto: Proyecto;
    id_tarea: number;
    tarea: Tarea;
    fecha: Date;
    horas_trabajadas: number;
    descripcion: string;
    verificada: boolean;
    creado_en: Date;
    actualizado_en: Date;
}
