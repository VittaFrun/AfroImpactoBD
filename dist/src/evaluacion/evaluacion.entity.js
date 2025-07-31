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
exports.Evaluacion = void 0;
const typeorm_1 = require("typeorm");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
let Evaluacion = class Evaluacion {
};
exports.Evaluacion = Evaluacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_evaluacion' }),
    __metadata("design:type", Number)
], Evaluacion.prototype, "id_evaluacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_voluntario' }),
    __metadata("design:type", Number)
], Evaluacion.prototype, "id_voluntario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.evaluaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", voluntario_entity_1.Voluntario)
], Evaluacion.prototype, "voluntario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_proyecto' }),
    __metadata("design:type", Number)
], Evaluacion.prototype, "id_proyecto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto, (proyecto) => proyecto.evaluaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], Evaluacion.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Evaluacion.prototype, "puntuacion", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Evaluacion.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Evaluacion.prototype, "fecha", void 0);
exports.Evaluacion = Evaluacion = __decorate([
    (0, typeorm_1.Entity)({ name: 'evaluacion' })
], Evaluacion);
//# sourceMappingURL=evaluacion.entity.js.map