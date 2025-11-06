import { Voluntario } from '../voluntario/voluntario.entity';
import { Logro } from '../logro/logro.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
export declare class VoluntarioLogro {
    id_voluntario_logro: number;
    id_voluntario: number;
    voluntario: Voluntario;
    id_logro: number;
    logro: Logro;
    fecha_obtenido: Date;
    proyecto_relacionado: number;
    proyecto: Proyecto;
    creado_en: Date;
}
