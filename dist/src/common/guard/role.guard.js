"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        var _a;
        const roles = this.reflector.getAllAndOverride('roles', [
            context.getClass(),
            context.getHandler(),
        ]);
        console.log('Roles from metadata:', roles);
        if (!roles.length) {
            console.log('No roles defined, access granted.');
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const userRoleId = (_a = request.user) === null || _a === void 0 ? void 0 : _a.role;
        const hasRole = roles.includes(userRoleId);
        if (!user || !user.role || !roles.includes(user.role)) {
            throw new common_1.ForbiddenException({
                success: false,
                errorCode: 'INSUFFICIENT_PERMISSIONS',
                message: "Accès refusé : vous n'avez pas les permissions nécessaires pour effectuer cette action.",
            });
        }
        return hasRole;
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
