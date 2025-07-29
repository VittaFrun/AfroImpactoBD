import { Rol } from '../rol/rol.entity';
import { Voluntario } from '../voluntario/voluntario.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
export declare class Usuario {
    id_usuario: number;
    nombre: string;
    correo: string;
    contraseña: string;
    rol: Rol;
    voluntario: Voluntario;
    organizacion: Organizacion;
}
