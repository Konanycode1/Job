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
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const job_repository_1 = require("../../outBound/job.repository");
const user_service_1 = require("../../../User/core/use-case/user.service");
let JobService = class JobService {
    constructor(jobRepository, userService) {
        this.jobRepository = jobRepository;
        this.userService = userService;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recruiter, title, description } = dto;
            if (!recruiter || !title || !description)
                return {
                    sucess: false,
                    message: 'Recruiter, title and description are required',
                };
            const userExist = yield this.userService.findOne(recruiter);
            if (!userExist) {
                return { success: false, message: 'User not found' };
            }
            const { role } = userExist;
            if (role !== 'recruiter') {
                return { success: false, message: 'User is not recruiter' };
            }
            return yield this.jobRepository.create(dto);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = yield this.jobRepository.findById(id);
            if (job === null) {
                return { success: false, message: 'Job not found' };
            }
            return { success: true, data: job };
        });
    }
    findOne(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = yield this.jobRepository.findOne(title);
            if (job === null) {
                return { success: false, message: 'Job not found' };
            }
            return { success: true, data: job };
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.jobRepository.findAll();
        });
    }
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.jobRepository.findById(id);
            if (!exist)
                return { sucess: false, message: 'Job not found' };
            const updated = yield this.jobRepository.edit(id, dto);
            if (!updated)
                return { sucess: false, message: 'Job not updated' };
            return { success: true, data: updated };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.jobRepository.findById(id);
            if (!exist)
                return { sucess: false, message: 'Job not found' };
            const deleted = yield this.jobRepository.delete(id);
            return deleted;
        });
    }
};
exports.JobService = JobService;
exports.JobService = JobService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [job_repository_1.JobRepository,
        user_service_1.UserService])
], JobService);
