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
exports.CreateApplyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateApplyDto {
}
exports.CreateApplyDto = CreateApplyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: new Date().toISOString(),
        description: 'Date de la candidature',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateApplyDto.prototype, "appliedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/cv.pdf',
        description: 'URL du CV du candidat',
    }),
    __metadata("design:type", String)
], CreateApplyDto.prototype, "cvUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'jobId123',
        description: "ID de l'offre d'emploi",
    }),
    __metadata("design:type", String)
], CreateApplyDto.prototype, "job", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'candidateId123',
        description: 'ID du candidat qui postule',
    }),
    __metadata("design:type", String)
], CreateApplyDto.prototype, "candidate", void 0);
