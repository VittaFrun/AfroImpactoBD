import { Usuario } from '../users/user.entity';
import { Jornada } from '../jornada/jornada.entity';
import { Estado } from '../estado/estado.entity';
import { VoluntarioHabilidad } from '../voluntario-habilidad/voluntario-habilidad.entity';
import { Asignacion } from '../asignacion/asignacion.entity';
export declare class Voluntario {
    id_voluntario: number;
    usuario: Usuario;
    jornada: Jornada;
    estado: Estado;
    disponibilidad: string;
    voluntarioHabilidades: VoluntarioHabilidad[];
    asignaciones: Asignacion[];
}
