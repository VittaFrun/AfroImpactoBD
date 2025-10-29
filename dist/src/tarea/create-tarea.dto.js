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
exports.CreateTareaDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateTareaDto {
}
exports.CreateTareaDto = CreateTareaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(10, 1000, { message: 'La descripción debe tener entre 10 y 1000 caracteres' }),
    __metadata("design:type", String)
], CreateTareaDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'La fecha de inicio debe ser una fecha válida' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTareaDto.prototype, "fecha_inicio", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'La fecha de fin debe ser una fecha válida' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTareaDto.prototype, "fecha_fin", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['Alta', 'Media', 'Baja'], { message: 'La prioridad debe ser Alta, Media o Baja' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTareaDto.prototype, "prioridad", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 100, { message: 'La complejidad debe tener entre 3 y 100 caracteres' }),
    __metadata("design:type", String)
], CreateTareaDto.prototype, "complejidad", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El ID del estado debe ser un número válido' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], CreateTareaDto.prototype, "id_estado", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El ID de la fase debe ser un número válido' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], CreateTareaDto.prototype, "id_fase", void 0);
//# sourceMappingURL=create-tarea.dto.js.map