"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("../User/user.module");
const job_controller_1 = require("./inBound/job.controller");
const db_module_1 = require("../../config/db.module");
const job_service_1 = require("./core/use-case/job.service");
const db_provider_1 = require("../../config/db.provider");
const job_provider_1 = require("./core/provider/job.provider");
const job_repository_1 = require("./outBound/job.repository");
let JobModule = class JobModule {
};
exports.JobModule = JobModule;
exports.JobModule = JobModule = __decorate([
    (0, common_1.Module)({
        imports: [db_module_1.DbModule, user_module_1.UserModule],
        controllers: [job_controller_1.JobController],
        providers: [job_service_1.JobService, ...db_provider_1.dbProviders, job_repository_1.JobRepository, ...job_provider_1.jobProviders],
        exports: [...job_provider_1.jobProviders, job_service_1.JobService, job_repository_1.JobRepository],
    })
], JobModule);
