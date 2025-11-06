export declare class CreateRolDto {
    nombre: string;
    descripcion?: string;
    tipo_rol: 'sistema' | 'organizacion' | 'proyecto';
    id_organizacion?: number;
    id_proyecto?: number;
    activo?: boolean;
}
