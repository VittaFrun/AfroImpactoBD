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

    if (!user || !user.tipo_usuario) {
      return false; // Si no hay usuario o tipo_usuario, denegar acceso
    }

    return requiredRoles.some((role) => user.tipo_usuario === role);
  }
}