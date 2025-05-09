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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const apply_service_1 = require("../core/use-case/apply.service");
const auth_guard_1 = require("../../../common/guard/auth.guard");
const role_guard_1 = require("../../../common/guard/role.guard");
const role_decorator_1 = require("../../../common/decorators/role.decorator");
let ApplyController = class ApplyController {
    constructor(applyService) {
        this.applyService = applyService;
    }
    findAllApplyByUser(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.user;
            const result = yield this.applyService.findAllApplyByCandidate(id);
            return res.status(200).json({ success: true, data: result });
        });
    }
};
exports.ApplyController = ApplyController;
__decorate([
    (0, common_1.Get)('/applications'),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('candidat'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all applications by user ID Candidat' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApplyController.prototype, "findAllApplyByUser", null);
exports.ApplyController = ApplyController = __decorate([
    (0, swagger_1.ApiTags)('Applies'),
    (0, common_1.Controller)('me'),
    __metadata("design:paramtypes", [apply_service_1.ApplyService])
], ApplyController);
