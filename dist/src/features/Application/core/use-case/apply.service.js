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
exports.ApplyService = void 0;
const common_1 = require("@nestjs/common");
const apply_repository_1 = require("../../outBound/apply.repository");
const job_service_1 = require("../../../Job/core/use-case/job.service");
const user_service_1 = require("../../../User/core/use-case/user.service");
let ApplyService = class ApplyService {
    constructor(applyRepository, jobService, userService) {
        this.applyRepository = applyRepository;
        this.jobService = jobService;
        this.userService = userService;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { job, cvUrl, candidate } = dto;
            if (!cvUrl)
                return { sucess: false, message: 'CV is required' };
            const [jobExist, candiateExist] = yield Promise.all([
                this.jobService.findById(job),
                this.userService.findOne(candidate),
            ]);
            if (jobExist === null)
                return { sucess: false, message: 'Job already exist' };
            if (candiateExist === null)
                return { sucess: false, message: 'User already exist' };
            dto.appliedAt = new Date();
            return yield this.applyRepository.create(dto);
        });
    }
    findByJob(job) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.applyRepository.findByJob(job);
            if (result === null)
                return { sucess: false, message: 'Job not found' };
            return result;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyRepository.findById(id);
        });
    }
    findByCandidate(candidate) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.applyRepository.findByCandidate(candidate);
            if (result === null)
                return { sucess: false, message: 'User not found' };
            return result;
        });
    }
    findByJobAndCandidate(job, candidate) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.applyRepository.findByJobAndCandidate(job, candidate);
            if (result === null)
                return { sucess: false, message: 'Apply not found' };
            return result;
        });
    }
    findAllApplyByJob(job) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.applyRepository.findAllApplyByJob(job);
            if (result === null)
                return { sucess: false, message: 'Apply not found' };
            return result;
        });
    }
    findAllApplyByCandidate(candidate) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.applyRepository.findAllApplyByCandidate(candidate);
            if (result === null)
                return { sucess: false, message: 'Apply not found' };
            return result;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.applyRepository.findAll();
        });
    }
    edit(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.applyRepository.edit(id, dto);
            if (result === null)
                return { sucess: false, message: 'Apply not found' };
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.applyRepository.delete(id);
            if (result === null)
                return { sucess: false, message: 'Apply not found' };
            return result;
        });
    }
};
exports.ApplyService = ApplyService;
exports.ApplyService = ApplyService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => job_service_1.JobService))),
    __metadata("design:paramtypes", [apply_repository_1.ApplyRepository,
        job_service_1.JobService,
        user_service_1.UserService])
], ApplyService);
