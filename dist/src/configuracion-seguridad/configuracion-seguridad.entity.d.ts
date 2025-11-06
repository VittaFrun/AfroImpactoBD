import { Usuario } from '../users/user.entity';
export declare class ConfiguracionSeguridad {
    id_config_seguridad: number;
    id_usuario: number;
    usuario: Usuario;
    two_factor_enabled: boolean;
    two_factor_secret: string;
    sso_enabled: boolean;
    sso_provider: string;
    session_timeout: number;
    ip_whitelist: string;
    audit_log_enabled: boolean;
    creado_en: Date;
    actualizado_en: Date;
}
