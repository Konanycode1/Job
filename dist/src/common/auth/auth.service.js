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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypt_1 = require("../utils/crypt");
const generate_1 = require("../utils/generate");
const user_service_1 = require("../../features/User/core/use-case/user.service");
const user_repository_1 = require("../../features/User/outBound/user.repository");
let AuthService = class AuthService {
    userService;
    configService;
    userRepository;
    constructor(userService, configService, userRepository) {
        this.userService = userService;
        this.configService = configService;
        this.userRepository = userRepository;
    }
    async create(createAuthDto) {
        const userExist = await this.userRepository.findUserExist(createAuthDto.email);
        if (userExist) {
            return { success: false, message: 'User already exist' };
        }
        const result = await this.userRepository.create(createAuthDto);
        if (!result) {
            return { success: false, message: 'User already exist or error to create user' };
        }
        return { success: true, message: 'User created successfully' };
    }
    async login(createAuthDto) {
        const { email, password } = createAuthDto;
        console.log(email, password);
        if (!email || !password) {
            return { success: false, message: 'Please fill in all fields' };
        }
        const userExist = await this.userRepository.findUserExist(email);
        console.log(userExist);
        if (!userExist) {
            return { success: false, message: 'Email not found.' };
        }
        const [verifyPass] = await Promise.all([
            (0, crypt_1.comparePasswords)(password, userExist.password),
        ]);
        if (!verifyPass) {
            return { success: false, message: 'Invalid password.' };
        }
        const refreshToken = (0, generate_1.refreshTokenExpired)({ id: userExist.id, email: userExist.email, role: userExist.role }, this.configService);
        const accessToken = (0, generate_1.generateToken)({ id: userExist.id, email: userExist.email, role: userExist.role }, this.configService);
        return {
            success: true,
            message: 'valid connection !!!!',
            accessToken,
            refreshToken,
        };
    }
    async getProfile(userId) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            return {
                success: false,
                message: 'User not found.',
            };
        }
        return {
            success: true,
            user
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService,
        user_repository_1.UserRepository])
], AuthService);
