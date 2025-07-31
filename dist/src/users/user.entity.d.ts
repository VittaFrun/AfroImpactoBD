import { Rol } from '../rol/rol.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
export declare class Usuario {
    id_usuario: number;
    nombre: string;
    correo: string;
    contraseña: string;
    id_rol: number;
    rol: Rol;
    tipo_usuario: string;
    creado_en: Date;
    actualizado_en: Date;
    voluntario: Voluntario;
    organizacion: Organizacion;
}
