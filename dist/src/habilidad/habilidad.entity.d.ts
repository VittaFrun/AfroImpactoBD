import { VoluntarioHabilidad } from '../voluntario-habilidad/voluntario-habilidad.entity';
export declare class Habilidad {
    id_habilidad: number;
    nombre: string;
    descripcion: string;
    voluntarioHabilidades: VoluntarioHabilidad[];
}
