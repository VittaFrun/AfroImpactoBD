import { Usuario } from '../users/user.entity';
import { Jornada } from '../jornada/jornada.entity';
import { Estado } from '../estado/estado.entity';
import { VoluntarioHabilidad } from '../voluntario-habilidad/voluntario-habilidad.entity';
import { Asignacion } from '../asignacion/asignacion.entity';
import { Disponibilidad } from '../disponibilidad/disponibilidad.entity';
import { Evaluacion } from '../evaluacion/evaluacion.entity';
export declare class Voluntario {
    id_voluntario: number;
    id_usuario: number;
    usuario: Usuario;
    id_jornada: number;
    jornada: Jornada;
    id_estado: number;
    estado: Estado;
    disponibilidad: string;
    creado_en: Date;
    actualizado_en: Date;
    voluntarioHabilidades: VoluntarioHabilidad[];
    asignaciones: Asignacion[];
    disponibilidades: Disponibilidad[];
    evaluaciones: Evaluacion[];
}
