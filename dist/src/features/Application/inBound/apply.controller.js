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
const create_apply__dto_1 = require("../core/dto/create-apply..dto");
let ApplyController = class ApplyController {
    constructor(applyService) {
        this.applyService = applyService;
    }
    create(jobId, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyService.create(jobId, dto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyService.findAll();
        });
    }
    findByJob(job) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyService.findByJob(job);
        });
    }
    findByCandidate(candidate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyService.findByCandidate(candidate);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyService.findById(id);
        });
    }
    findByJobAndCandidate(job, candidate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyService.findByJobAndCandidate(job, candidate);
        });
    }
    edit(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyService.edit(id, dto);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyService.delete(id);
        });
    }
};
exports.ApplyController = ApplyController;
__decorate([
    (0, common_1.Post)(':jobId'),
    (0, swagger_1.ApiOperation)({ summary: 'Apply for a job' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Application created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Missing or invalid data.' }),
    __param(0, (0, common_1.Param)('jobId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_apply__dto_1.CreateApplyDto]),
    __metadata("design:returntype", Promise)
], ApplyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all applications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApplyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('job/:jobId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get applications by job ID' }),
    __param(0, (0, common_1.Param)('jobId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApplyController.prototype, "findByJob", null);
__decorate([
    (0, common_1.Get)('candidate/:candidateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get applications by candidate ID' }),
    __param(0, (0, common_1.Param)('candidateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApplyController.prototype, "findByCandidate", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get application by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApplyController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('job/:jobId/candidate/:candidateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get application by job and candidate' }),
    __param(0, (0, common_1.Param)('jobId')),
    __param(1, (0, common_1.Param)('candidateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ApplyController.prototype, "findByJobAndCandidate", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Edit an application' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ApplyController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an application' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApplyController.prototype, "delete", null);
exports.ApplyController = ApplyController = __decorate([
    (0, swagger_1.ApiTags)('Applies'),
    (0, common_1.Controller)('applies'),
    __metadata("design:paramtypes", [apply_service_1.ApplyService])
], ApplyController);
