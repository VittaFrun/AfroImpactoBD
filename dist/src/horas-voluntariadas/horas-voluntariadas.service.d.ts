import { Repository } from 'typeorm';
import { HorasVoluntariadas } from './horas-voluntariadas.entity';
import { CreateHorasVoluntariadasDto } from './create-horas-voluntariadas.dto';
import { UpdateHorasVoluntariadasDto } from './update-horas-voluntariadas.dto';
import { Usuario } from '../users/user.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Tarea } from '../tarea/tarea.entity';
import { Asignacion } from '../asignacion/asignacion.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
export declare class HorasVoluntariadasService {
    private readonly repo;
    private readonly voluntarioRepo;
    private readonly proyectoRepo;
    private readonly tareaRepo;
    private readonly asignacionRepo;
    private readonly orgRepo;
    constructor(repo: Repository<HorasVoluntariadas>, voluntarioRepo: Repository<Voluntario>, proyectoRepo: Repository<Proyecto>, tareaRepo: Repository<Tarea>, asignacionRepo: Repository<Asignacion>, orgRepo: Repository<Organizacion>);
    create(dto: CreateHorasVoluntariadasDto, user: Usuario): Promise<HorasVoluntariadas>;
    findAllByVolunteer(user: Usuario): Promise<HorasVoluntariadas[]>;
    findByProject(idProyecto: number, user: Usuario): Promise<HorasVoluntariadas[]>;
    getResumenByProject(idProyecto: number, user: Usuario): Promise<{
        totalHoras: number;
        horasVerificadas: number;
        horasPendientes: number;
        totalRegistros: number;
        registrosVerificados: number;
        registrosPendientes: number;
    }>;
    findAllByProjectForOrganization(idProyecto: number, user: Usuario): Promise<HorasVoluntariadas[]>;
    update(id: number, dto: UpdateHorasVoluntariadasDto, user: Usuario): Promise<HorasVoluntariadas>;
    remove(id: number, user: Usuario): Promise<HorasVoluntariadas>;
    verificar(id: number, verificada: boolean, user: Usuario): Promise<HorasVoluntariadas>;
}
