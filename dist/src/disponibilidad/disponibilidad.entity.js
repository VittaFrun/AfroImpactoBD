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
exports.Disponibilidad = void 0;
const typeorm_1 = require("typeorm");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
let Disponibilidad = class Disponibilidad {
};
exports.Disponibilidad = Disponibilidad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_disponibilidad' }),
    __metadata("design:type", Number)
], Disponibilidad.prototype, "id_disponibilidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_voluntario' }),
    __metadata("design:type", Number)
], Disponibilidad.prototype, "id_voluntario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.disponibilidades),
    (0, typeorm_1.JoinColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", voluntario_entity_1.Voluntario)
], Disponibilidad.prototype, "voluntario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, name: 'dia_semana' }),
    __metadata("design:type", String)
], Disponibilidad.prototype, "dia_semana", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: 'hora_inicio' }),
    __metadata("design:type", String)
], Disponibilidad.prototype, "hora_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: 'hora_fin' }),
    __metadata("design:type", String)
], Disponibilidad.prototype, "hora_fin", void 0);
exports.Disponibilidad = Disponibilidad = __decorate([
    (0, typeorm_1.Entity)({ name: 'disponibilidad' })
], Disponibilidad);
//# sourceMappingURL=disponibilidad.entity.js.map