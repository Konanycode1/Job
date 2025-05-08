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
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const job_service_1 = require("../core/use-case/job.service");
const create_job_dto_1 = require("../core/dto/create-job.dto");
const update_job_dto_1 = require("../core/dto/update-job.dto");
const auth_guard_1 = require("../../../common/guard/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const role_decorator_1 = require("../../../common/decorators/role.decorator");
const role_guard_1 = require("../../../common/guard/role.guard");
let JobController = class JobController {
    constructor(jobService) {
        this.jobService = jobService;
    }
    create(createJobDto, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.jobService.create(createJobDto);
            const status = result.success === false ? common_1.HttpStatus.BAD_REQUEST : common_1.HttpStatus.CREATED;
            return res.status(status).json(result);
        });
    }
    findAll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.jobService.findAll();
            return res.status(200).json({ success: true, data: result });
        });
    }
    findOne(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.jobService.findById(id);
            const status = result.success === false ? common_1.HttpStatus.NOT_FOUND : common_1.HttpStatus.OK;
            return res.status(status).json(result);
        });
    }
    update(id, updateJobDto, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.jobService.update(id, updateJobDto);
            const status = result.success === false ? common_1.HttpStatus.BAD_REQUEST : common_1.HttpStatus.OK;
            return res.status(status).json(result);
        });
    }
    remove(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.jobService.delete(id);
            const status = result.success === false ? common_1.HttpStatus.NOT_FOUND : common_1.HttpStatus.OK;
            return res.status(status).json(result);
        });
    }
};
exports.JobController = JobController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('recruteur'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "Créer une offre d'emploi" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Job créé avec succès' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_dto_1.CreateJobDto, Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Liste de toutes les offres' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('recruteur'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une offre par ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('recruteur'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour une offre' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_job_dto_1.UpdateJobDto, Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('recruteur'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une offre' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "remove", null);
exports.JobController = JobController = __decorate([
    (0, swagger_1.ApiTags)('Jobs'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Controller)('jobs'),
    __metadata("design:paramtypes", [job_service_1.JobService])
], JobController);
