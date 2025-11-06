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
exports.CreateFormularioInscripcionDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateFormularioInscripcionDto {
}
exports.CreateFormularioInscripcionDto = CreateFormularioInscripcionDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value ? parseInt(value) : undefined),
    __metadata("design:type", Number)
], CreateFormularioInscripcionDto.prototype, "id_proyecto", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value ? parseInt(value) : undefined),
    __metadata("design:type", Number)
], CreateFormularioInscripcionDto.prototype, "id_organizacion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormularioInscripcionDto.prototype, "nombre_campo", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['text', 'textarea', 'number', 'date', 'select', 'file']),
    __metadata("design:type", String)
], CreateFormularioInscripcionDto.prototype, "tipo_campo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormularioInscripcionDto.prototype, "etiqueta", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFormularioInscripcionDto.prototype, "placeholder", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value === true || value === 'true' || value === 1),
    __metadata("design:type", Boolean)
], CreateFormularioInscripcionDto.prototype, "requerido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFormularioInscripcionDto.prototype, "opciones", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value ? parseInt(value) : 0),
    __metadata("design:type", Number)
], CreateFormularioInscripcionDto.prototype, "orden", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value === true || value === 'true' || value === 1),
    __metadata("design:type", Boolean)
], CreateFormularioInscripcionDto.prototype, "activo", void 0);
//# sourceMappingURL=create-formulario-inscripcion.dto.js.map