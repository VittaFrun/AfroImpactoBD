import { Estado } from '../estado/estado.entity';
import { Fase } from '../fase/fase.entity';
import { DonacionProyecto } from '../donacion-proyecto/donacion-proyecto.entity';
import { Movimiento } from '../movimiento/movimiento.entity';
import { Reporte } from '../reporte/reporte.entity';
import { Evaluacion } from '../evaluacion/evaluacion.entity';
export declare class Proyecto {
    id_proyecto: number;
    nombre: string;
    descripcion: string;
    objetivo: string;
    ubicacion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    imagen_principal: string;
    id_estado: number;
    estado: Estado;
    creado_en: Date;
    actualizado_en: Date;
    fases: Fase[];
    donacionProyectos: DonacionProyecto[];
    movimientos: Movimiento[];
    reportes: Reporte[];
    evaluaciones: Evaluacion[];
}
