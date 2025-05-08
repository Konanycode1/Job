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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_auth_dto_1 = require("./dto/create-auth.dto");
const auth_guard_1 = require("../guard/auth.guard");
const createUser_dto_1 = require("../../features/User/core/dto/createUser.dto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    create(createAuthDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.authService.create(createAuthDto);
            if (result.success === false)
                return result;
            return result;
        });
    }
    login(createAuthDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.authService.login(createAuthDto);
            return result;
        });
    }
    getProfile(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.authService.getProfile(req.user.id);
            if (result.success === false)
                return result;
            return result;
        });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new user' }),
    (0, swagger_1.ApiBody)({ type: createUser_dto_1.CreateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User registered successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Validation failed or email already exists',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login a user' }),
    (0, swagger_1.ApiBody)({ type: create_auth_dto_1.LoginAuthDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Login successful with token' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid credentials' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.LoginAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Get)('/profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user profile' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User profile returned' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'User not found or token invalid' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
