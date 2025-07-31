import { Voluntario } from '../voluntario/voluntario.entity';
export declare class Disponibilidad {
    id_disponibilidad: number;
    id_voluntario: number;
    voluntario: Voluntario;
    dia_semana: string;
    hora_inicio: string;
    hora_fin: string;
}
