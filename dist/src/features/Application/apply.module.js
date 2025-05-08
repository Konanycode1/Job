"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyModule = void 0;
const common_1 = require("@nestjs/common");
const job_module_1 = require("../Job/job.module");
const user_module_1 = require("../User/user.module");
const apply_repository_1 = require("./outBound/apply.repository");
const apply_service_1 = require("./core/use-case/apply.service");
const application_provider_1 = require("./core/provider/application.provider");
const db_provider_1 = require("../../config/db.provider");
const db_module_1 = require("../../config/db.module");
const apply_controller_1 = require("./inBound/apply.controller");
let ApplyModule = class ApplyModule {
};
exports.ApplyModule = ApplyModule;
exports.ApplyModule = ApplyModule = __decorate([
    (0, common_1.Module)({
        imports: [db_module_1.DbModule, user_module_1.UserModule, job_module_1.JobModule],
        controllers: [
            apply_controller_1.ApplyController
        ],
        providers: [...db_provider_1.dbProviders, apply_service_1.ApplyService, ...application_provider_1.applyProviders, apply_repository_1.ApplyRepository],
        exports: [...application_provider_1.applyProviders, apply_service_1.ApplyService, apply_repository_1.ApplyRepository],
    })
], ApplyModule);
