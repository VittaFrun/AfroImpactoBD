import { Usuario } from '../users/user.entity';
export declare class Integracion {
    id_integracion: number;
    id_usuario: number;
    usuario: Usuario;
    tipo: string;
    nombre: string;
    habilitada: boolean;
    token_acceso: string;
    token_refresh: string;
    configuracion: string;
    expiracion_token: Date;
    creado_en: Date;
    actualizado_en: Date;
}
