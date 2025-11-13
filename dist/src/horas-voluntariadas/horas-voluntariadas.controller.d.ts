import { HorasVoluntariadasService } from './horas-voluntariadas.service';
import { CreateHorasVoluntariadasDto } from './create-horas-voluntariadas.dto';
import { UpdateHorasVoluntariadasDto } from './update-horas-voluntariadas.dto';
import { Usuario } from '../users/user.entity';
export declare class HorasVoluntariadasController {
    private readonly service;
    constructor(service: HorasVoluntariadasService);
    create(dto: CreateHorasVoluntariadasDto, user: Usuario): Promise<import("./horas-voluntariadas.entity").HorasVoluntariadas>;
    findAllByVolunteer(user: Usuario): Promise<import("./horas-voluntariadas.entity").HorasVoluntariadas[]>;
    findByProject(idProyecto: string, user: Usuario): Promise<import("./horas-voluntariadas.entity").HorasVoluntariadas[]>;
    getResumenByProject(idProyecto: string, user: Usuario): Promise<{
        totalHoras: number;
        horasVerificadas: number;
        horasPendientes: number;
        totalRegistros: number;
        registrosVerificados: number;
        registrosPendientes: number;
    }>;
    findAllByProjectForOrganization(idProyecto: string, user: Usuario): Promise<import("./horas-voluntariadas.entity").HorasVoluntariadas[]>;
    update(id: string, dto: UpdateHorasVoluntariadasDto, user: Usuario): Promise<import("./horas-voluntariadas.entity").HorasVoluntariadas>;
    verificar(id: string, body: {
        verificada: boolean;
    }, user: Usuario): Promise<import("./horas-voluntariadas.entity").HorasVoluntariadas>;
    remove(id: string, user: Usuario): Promise<import("./horas-voluntariadas.entity").HorasVoluntariadas>;
}
