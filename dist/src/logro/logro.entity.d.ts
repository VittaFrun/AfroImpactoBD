import { VoluntarioLogro } from '../voluntario-logro/voluntario-logro.entity';
export declare class Logro {
    id_logro: number;
    nombre: string;
    descripcion: string;
    icono: string;
    puntos: number;
    tipo: string;
    condicion: string;
    creado_en: Date;
    voluntarioLogros: VoluntarioLogro[];
}
