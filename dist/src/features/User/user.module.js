"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const db_module_1 = require("../../config/db.module");
const user_controller_1 = require("./inBound/user.controller");
const user_service_1 = require("./core/use-case/user.service");
const db_provider_1 = require("../../config/db.provider");
const user_repository_1 = require("./outBound/user.repository");
const user_provider_1 = require("./core/provider/user.provider");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            db_module_1.DbModule
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            user_service_1.UserService,
            ...db_provider_1.dbProviders,
            user_repository_1.UserRepository,
            ...user_provider_1.userProviders
        ],
        exports: [
            ...user_provider_1.userProviders,
            user_service_1.UserService,
            user_repository_1.UserRepository
        ]
    })
], UserModule);
