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
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const job_repository_1 = require("../../outBound/job.repository");
const user_service_1 = require("../../../User/core/use-case/user.service");
let JobService = class JobService {
    jobRepository;
    userService;
    constructor(jobRepository, userService) {
        this.jobRepository = jobRepository;
        this.userService = userService;
    }
    async create(dto) {
        const { recruiter, title, description } = dto;
        if (!recruiter || !title || !description)
            return {
                sucess: false,
                message: 'Recruiter, title and description are required',
            };
        const userExist = await this.userService.findOne(recruiter);
        if (!userExist) {
            return { success: false, message: 'User not found' };
        }
        const { role } = userExist;
        if (role !== 'recruiter') {
            return { success: false, message: 'User is not recruiter' };
        }
        return await this.jobRepository.create(dto);
    }
    async findById(id) {
        const job = await this.jobRepository.findById(id);
        if (job === null) {
            return { success: false, message: 'Job not found' };
        }
        return { success: true, data: job };
    }
    async findOne(title) {
        const job = await this.jobRepository.findOne(title);
        if (job === null) {
            return { success: false, message: 'Job not found' };
        }
        return { success: true, data: job };
    }
    async findAll() {
        return await this.jobRepository.findAll();
    }
    async update(id, dto) {
        const exist = await this.jobRepository.findById(id);
        if (!exist)
            return { sucess: false, message: 'Job not found' };
        const updated = await this.jobRepository.edit(id, dto);
        if (!updated)
            return { sucess: false, message: 'Job not updated' };
        return { success: true, data: updated };
    }
    async delete(id) {
        const exist = await this.jobRepository.findById(id);
        if (!exist)
            return { sucess: false, message: 'Job not found' };
        const deleted = await this.jobRepository.delete(id);
        return deleted;
    }
};
exports.JobService = JobService;
exports.JobService = JobService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [job_repository_1.JobRepository,
        user_service_1.UserService])
], JobService);
