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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const crypt_1 = require("../../../../common/utils/crypt");
const user_repository_1 = require("../../outBound/user.repository");
let UserService = class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(dto) {
        const { email, password, role } = dto;
        if (!email || !password)
            return ({ sucess: false, message: 'Email and password are required' });
        const hash = await (0, crypt_1.hashPassword)(password);
        dto.password = hash;
        return await this.userRepository.create(dto);
    }
    async update(id, dto) {
        const { email, password, role } = dto;
        const existEmail = await this.userRepository.findUserExist(email);
        if (role === 'admin') {
            const admin = await this.userRepository.findOne(role);
            if (admin)
                return ({ sucess: false, message: 'Admin already exist' });
        }
        if (existEmail)
            return ({ sucess: false, message: 'Email already exist' });
        if (password) {
            const hash = await (0, crypt_1.hashPassword)(password);
            dto.password = hash;
        }
        return await this.userRepository.edit(id, dto);
    }
    delete(id) {
        return this.userRepository.delete(id);
    }
    async findOne(id) {
        return await this.userRepository.findById(id);
    }
    async findAll() {
        return await this.userRepository.findAll();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
