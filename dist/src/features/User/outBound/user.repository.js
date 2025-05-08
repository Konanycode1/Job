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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let UserRepository = class UserRepository {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(dto) {
        const { email, password, role } = dto;
        if (!email || !password)
            return { sucess: false, message: 'Email and password are required' };
        const existEmail = await this.userModel.findOne({ email });
        if (existEmail)
            return { sucess: false, message: 'Email already exist' };
        if (role === 'admin') {
            const admin = await this.userModel.findOne({ role: 'admin' });
            if (admin)
                return { sucess: false, message: 'Admin already exist' };
        }
        const createdCat = await this.userModel.create(dto);
        return createdCat;
    }
    async delete(id) {
        const exist = await this.userModel.findById(id);
        if (!exist)
            return { sucess: false, message: 'User not found' };
        const deleted = await this.userModel.findByIdAndDelete(id);
        return deleted;
    }
    async edit(id, dto) {
        const exist = await this.userModel.findById(id);
        if (!exist)
            return { sucess: false, message: 'User not found' };
        const updated = await this.userModel.findByIdAndUpdate(id, dto, {
            new: true,
        });
        return updated;
    }
    async findById(id) {
        const exist = await this.userModel.findById(id);
        if (!exist)
            return { sucess: false, message: 'User not found' };
        return exist;
    }
    async findOne(role) {
        const exist = await this.userModel.findOne({ role });
        return exist;
    }
    async findUserExist(email) {
        const exist = await this.userModel.findOne({ email });
        if (!exist)
            return { sucess: false, message: 'User not found' };
        return exist;
    }
    async findAll() {
        const users = await this.userModel.find({}).exec();
        return users;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserRepository);
