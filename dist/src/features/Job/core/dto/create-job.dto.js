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
exports.ApplyDto = exports.CreateJobDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateJobDto {
}
exports.CreateJobDto = CreateJobDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Développeur Full Stack',
        description: "Titre de l'offre d'emploi",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJobDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Nous recherchons un développeur...',
        description: 'Description du poste',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJobDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '609dcd42f2b3a12b8c8fbc5e',
        description: 'ID du recruteur (User)',
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateJobDto.prototype, "recruiter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: new Date().toISOString(),
        description: 'Date de création',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateJobDto.prototype, "createdAt", void 0);
class ApplyDto {
}
exports.ApplyDto = ApplyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/cv.pdf',
        description: 'URL du CV du candidat',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApplyDto.prototype, "cvUrl", void 0);
