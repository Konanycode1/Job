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
exports.ApplyService = void 0;
const common_1 = require("@nestjs/common");
const apply_repository_1 = require("../../outBound/apply.repository");
const job_service_1 = require("../../../Job/core/use-case/job.service");
const user_service_1 = require("../../../User/core/use-case/user.service");
let ApplyService = class ApplyService {
    applyRepository;
    jobService;
    userService;
    constructor(applyRepository, jobService, userService) {
        this.applyRepository = applyRepository;
        this.jobService = jobService;
        this.userService = userService;
    }
    async create(jobId, dto) {
        const { cvUrl, candiate } = dto;
        if (!cvUrl)
            return { sucess: false, message: 'CV is required' };
        const [jobExist, candiateExist] = await Promise.all([
            this.jobService.findById(jobId),
            this.userService.findOne(candiate),
        ]);
        if (jobExist === null)
            return { sucess: false, message: 'Job already exist' };
        if (candiateExist === null)
            return { sucess: false, message: 'User already exist' };
        dto.job = jobId;
        dto.candidate = candiate._id;
        dto.appliedAt = new Date();
        return await this.applyRepository.create(dto);
    }
    async findByJob(job) {
        const result = await this.applyRepository.findByJob(job);
        if (result === null)
            return { sucess: false, message: 'Job not found' };
        return result;
    }
    async findById(id) {
        return await this.applyRepository.findById(id);
    }
    async findByCandidate(candidate) {
        const result = await this.applyRepository.findByCandidate(candidate);
        if (result === null)
            return { sucess: false, message: 'User not found' };
        return result;
    }
    async findByJobAndCandidate(job, candidate) {
        const result = await this.applyRepository.findByJobAndCandidate(job, candidate);
        if (result === null)
            return { sucess: false, message: 'Apply not found' };
        return result;
    }
    async findAll() {
        return await this.applyRepository.findAll();
    }
    async edit(id, dto) {
        const result = await this.applyRepository.edit(id, dto);
        if (result === null)
            return { sucess: false, message: 'Apply not found' };
        return result;
    }
    async delete(id) {
        const result = await this.applyRepository.delete(id);
        if (result === null)
            return { sucess: false, message: 'Apply not found' };
        return result;
    }
};
exports.ApplyService = ApplyService;
exports.ApplyService = ApplyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [apply_repository_1.ApplyRepository,
        job_service_1.JobService,
        user_service_1.UserService])
], ApplyService);
