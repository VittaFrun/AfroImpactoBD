import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
export declare class FormularioInscripcion {
    id_formulario: number;
    id_proyecto: number | null;
    proyecto: Proyecto | null;
    id_organizacion: number | null;
    organizacion: Organizacion | null;
    nombre_campo: string;
    tipo_campo: 'text' | 'textarea' | 'number' | 'date' | 'select' | 'file';
    etiqueta: string;
    placeholder: string;
    requerido: boolean;
    opciones: string;
    orden: number;
    activo: boolean;
    creado_en: Date;
    actualizado_en: Date;
}
