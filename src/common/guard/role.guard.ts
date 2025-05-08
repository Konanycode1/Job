import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<number[]>('roles', [
      context.getClass(),
      context.getHandler(),
    ]);

    console.log('Roles from metadata:', roles);
    if (!roles.length) {
      console.log('No roles defined, access granted.');
      return true;
    }
    const request = context.switchToHttp().getRequest();
    // console.log('Request user:', request.user);
    const user = request.user
    const userRoleId = request.user?.role;
    // console.log('User role ID:', userRoleId);
    const hasRole = roles.includes(userRoleId);
    // console.log(`User has required role: ${hasRole}`);
    if (!user || !user.role || !roles.includes(user.role)) {
      throw new ForbiddenException({
        success: false,
        errorCode: "INSUFFICIENT_PERMISSIONS",
        message: "Accès refusé : vous n'avez pas les permissions nécessaires pour effectuer cette action.",
      });
    }
    return hasRole;
  }
}
