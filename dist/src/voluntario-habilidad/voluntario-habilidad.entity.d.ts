import { Voluntario } from '../voluntario/voluntario.entity';
import { Habilidad } from '../habilidad/habilidad.entity';
export declare class VoluntarioHabilidad {
    id_voluntario: number;
    id_habilidad: number;
    voluntario: Voluntario;
    habilidad: Habilidad;
    tiempo_experiencia: string;
    nivel: string;
    verificado: boolean;
}
