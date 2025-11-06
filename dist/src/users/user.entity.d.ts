import { Rol } from '../rol/rol.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { PreferenciaUsuario } from '../preferencia-usuario/preferencia-usuario.entity';
import { ConfiguracionSeguridad } from '../configuracion-seguridad/configuracion-seguridad.entity';
import { Integracion } from '../integracion/integracion.entity';
export declare class Usuario {
    id_usuario: number;
    nombre: string;
    email: string;
    password: string;
    telefono: string;
    id_rol: number | null;
    rol: Rol;
    tipo_usuario: string;
    creado_en: Date;
    actualizado_en: Date;
    voluntario: Voluntario;
    organizacion: Organizacion;
    preferencias: PreferenciaUsuario[];
    configuracionesSeguridad: ConfiguracionSeguridad[];
    integraciones: Integracion[];
}
