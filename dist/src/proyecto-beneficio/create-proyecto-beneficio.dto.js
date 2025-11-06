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
exports.CreateProyectoBeneficioDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProyectoBeneficioDto {
}
exports.CreateProyectoBeneficioDto = CreateProyectoBeneficioDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProyectoBeneficioDto.prototype, "id_proyecto", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['volunteer', 'stipend', 'salary', 'honorarium']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProyectoBeneficioDto.prototype, "tipo_pago", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProyectoBeneficioDto.prototype, "monto", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['none', 'monthly', 'weekly', 'project']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProyectoBeneficioDto.prototype, "frecuencia", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProyectoBeneficioDto.prototype, "descripcion_pago", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateProyectoBeneficioDto.prototype, "incluye_transporte", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateProyectoBeneficioDto.prototype, "incluye_alimentacion", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateProyectoBeneficioDto.prototype, "incluye_materiales", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateProyectoBeneficioDto.prototype, "incluye_seguro", void 0);
//# sourceMappingURL=create-proyecto-beneficio.dto.js.map