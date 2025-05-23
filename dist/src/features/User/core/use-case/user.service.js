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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const crypt_1 = require("../../../../common/utils/crypt");
const user_repository_1 = require("../../outBound/user.repository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, role } = dto;
            if (!email || !password)
                return { sucess: false, message: 'Email and password are required' };
            const hash = yield (0, crypt_1.hashPassword)(password);
            dto.password = hash;
            return yield this.userRepository.create(dto);
        });
    }
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, role } = dto;
            const existEmail = yield this.userRepository.findUserExist(email);
            if (role === 'admin') {
                const admin = yield this.userRepository.findOne(role);
                if (admin)
                    return { sucess: false, message: 'Admin already exist' };
            }
            if (existEmail)
                return { sucess: false, message: 'Email already exist' };
            if (password) {
                const hash = yield (0, crypt_1.hashPassword)(password);
                dto.password = hash;
            }
            return yield this.userRepository.edit(id, dto);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield this.userRepository.delete(id);
            if (deleted.success === false)
                return { success: false, message: 'User not found' };
            return deleted;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findById(id);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findAll();
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
