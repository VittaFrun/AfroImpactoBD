import { Estado } from '../estado/estado.entity';
import { Fase } from '../fase/fase.entity';
import { DonacionProyecto } from '../donacion-proyecto/donacion-proyecto.entity';
import { Movimiento } from '../movimiento/movimiento.entity';
import { Reporte } from '../reporte/reporte.entity';
export declare class Proyecto {
    id_proyecto: number;
    nombre: string;
    descripcion: string;
    objetivo: string;
    ubicacion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    estado: Estado;
    fases: Fase[];
    donacionProyectos: DonacionProyecto[];
    movimientos: Movimiento[];
    reportes: Reporte[];
}
