import { Voluntario } from '../voluntario/voluntario.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
export declare class Certificado {
    id_certificado: number;
    id_voluntario: number;
    voluntario: Voluntario;
    id_proyecto: number;
    proyecto: Proyecto;
    nombre: string;
    descripcion: string;
    tipo: string;
    fecha_emision: Date;
    fecha_expiracion: Date;
    codigo_verificacion: string;
    archivo_pdf: string;
    creado_en: Date;
}
