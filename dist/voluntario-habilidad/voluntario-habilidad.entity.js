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
exports.VoluntarioHabilidad = void 0;
const typeorm_1 = require("typeorm");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const habilidad_entity_1 = require("../habilidad/habilidad.entity");
let VoluntarioHabilidad = class VoluntarioHabilidad {
};
exports.VoluntarioHabilidad = VoluntarioHabilidad;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", Number)
], VoluntarioHabilidad.prototype, "id_voluntario", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_habilidad' }),
    __metadata("design:type", Number)
], VoluntarioHabilidad.prototype, "id_habilidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.voluntarioHabilidades),
    (0, typeorm_1.JoinColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", voluntario_entity_1.Voluntario)
], VoluntarioHabilidad.prototype, "voluntario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => habilidad_entity_1.Habilidad, (habilidad) => habilidad.voluntarioHabilidades),
    (0, typeorm_1.JoinColumn)({ name: 'id_habilidad' }),
    __metadata("design:type", habilidad_entity_1.Habilidad)
], VoluntarioHabilidad.prototype, "habilidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, name: 'tiempo_experiencia' }),
    __metadata("design:type", String)
], VoluntarioHabilidad.prototype, "tiempo_experiencia", void 0);
exports.VoluntarioHabilidad = VoluntarioHabilidad = __decorate([
    (0, typeorm_1.Entity)({ name: 'voluntario_habilidad' })
], VoluntarioHabilidad);
//# sourceMappingURL=voluntario-habilidad.entity.js.map