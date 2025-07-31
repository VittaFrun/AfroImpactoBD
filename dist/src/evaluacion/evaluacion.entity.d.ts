import { Voluntario } from '../voluntario/voluntario.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
export declare class Evaluacion {
    id_evaluacion: number;
    id_voluntario: number;
    voluntario: Voluntario;
    id_proyecto: number;
    proyecto: Proyecto;
    puntuacion: number;
    comentario: string;
    fecha: Date;
}
