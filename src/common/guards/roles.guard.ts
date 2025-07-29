import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../users/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // Si no hay roles definidos, permitir acceso
    }

    const { user } = context.switchToHttp().getRequest();

    // Asumiendo que el objeto de usuario en la solicitud tiene una propiedad 'rol' que es un objeto Rol
    // y que el objeto Rol tiene una propiedad 'nombre'
    if (!user || !user.rol || !user.rol.nombre) {
      return false; // Si no hay usuario o rol, denegar acceso
    }

    return requiredRoles.some((role) => user.rol.nombre === role);
  }
}