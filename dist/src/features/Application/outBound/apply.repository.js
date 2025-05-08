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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let ApplyRepository = class ApplyRepository {
    applyModel;
    constructor(applyModel) {
        this.applyModel = applyModel;
    }
    async create(dto) {
        return await this.applyModel.create(dto);
    }
    async findById(id) {
        return await this.applyModel.findById(id)
            .populate('job')
            .populate('candidate')
            .exec();
    }
    async findByJob(job) {
        return await this.applyModel.findOne({ job: job })
            .populate('candidate')
            .populate('job')
            .exec();
    }
    async findByCandidate(candidate) {
        return await this.applyModel.findOne({ candidate: candidate })
            .populate('candidate')
            .populate('job')
            .exec();
    }
    async findByJobAndCandidate(job, candidate) {
        return await this.applyModel.findOne({ job: job, candidate: candidate })
            .populate('candidate')
            .populate('job')
            .exec();
    }
    async findAll() {
        return await this.applyModel.find({})
            .populate('candidate')
            .populate('job')
            .exec();
    }
    async edit(id, dto) {
        return await this.applyModel.findByIdAndUpdate(id, dto, { new: true });
    }
    async delete(id) {
        return await this.applyModel.deleteOne({ _id: id });
    }
};
exports.ApplyRepository = ApplyRepository;
exports.ApplyRepository = ApplyRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('APPLY_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ApplyRepository);
