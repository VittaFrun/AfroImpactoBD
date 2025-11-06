import { Usuario } from '../users/user.entity';
export declare class PreferenciaUsuario {
    id_preferencia: number;
    id_usuario: number;
    usuario: Usuario;
    notificaciones_email: boolean;
    resumen_semanal: boolean;
    recordatorios: boolean;
    notificaciones_push: boolean;
    modo_oscuro: boolean;
    idioma: string;
    zona_horaria: string;
    creado_en: Date;
    actualizado_en: Date;
}
