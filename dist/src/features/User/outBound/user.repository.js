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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let UserRepository = class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, role } = dto;
            if (!email || !password)
                return { sucess: false, message: 'Email and password are required' };
            const existEmail = yield this.userModel.findOne({ email });
            console.log(existEmail);
            if (existEmail)
                return { sucess: false, message: 'Email already exist' };
            if (role === 'admin') {
                const admin = yield this.userModel.findOne({ role: 'admin' });
                if (admin)
                    return { sucess: false, message: 'Admin already exist' };
            }
            const createdCat = yield this.userModel.create(dto);
            return createdCat;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.userModel.findById(id);
            if (exist === null)
                return { sucess: false, message: 'User not found' };
            const deleted = yield this.userModel.findByIdAndDelete(id);
            return deleted;
        });
    }
    edit(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.userModel.findById(id);
            if (!exist)
                return { sucess: false, message: 'User not found' };
            const updated = yield this.userModel.findByIdAndUpdate(id, dto, {
                new: true,
            });
            return updated;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.userModel.findById(id);
            if (exist === null)
                return { sucess: false, message: 'User not found' };
            return exist;
        });
    }
    findOne(role) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.userModel.findOne({ role });
            return exist;
        });
    }
    findUserExist(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.userModel.findOne({ email });
            if (!exist)
                return { sucess: false, message: 'User not found' };
            return exist;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userModel.find({}).exec();
            return users;
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserRepository);
