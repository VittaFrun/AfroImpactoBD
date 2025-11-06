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
exports.VoluntarioLogro = void 0;
const typeorm_1 = require("typeorm");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const logro_entity_1 = require("../logro/logro.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
let VoluntarioLogro = class VoluntarioLogro {
};
exports.VoluntarioLogro = VoluntarioLogro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_voluntario_logro' }),
    __metadata("design:type", Number)
], VoluntarioLogro.prototype, "id_voluntario_logro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_voluntario' }),
    __metadata("design:type", Number)
], VoluntarioLogro.prototype, "id_voluntario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.voluntarioLogros),
    (0, typeorm_1.JoinColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", voluntario_entity_1.Voluntario)
], VoluntarioLogro.prototype, "voluntario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_logro' }),
    __metadata("design:type", Number)
], VoluntarioLogro.prototype, "id_logro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => logro_entity_1.Logro, (logro) => logro.voluntarioLogros),
    (0, typeorm_1.JoinColumn)({ name: 'id_logro' }),
    __metadata("design:type", logro_entity_1.Logro)
], VoluntarioLogro.prototype, "logro", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_obtenido' }),
    __metadata("design:type", Date)
], VoluntarioLogro.prototype, "fecha_obtenido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'proyecto_relacionado', nullable: true }),
    __metadata("design:type", Number)
], VoluntarioLogro.prototype, "proyecto_relacionado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'proyecto_relacionado' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], VoluntarioLogro.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], VoluntarioLogro.prototype, "creado_en", void 0);
exports.VoluntarioLogro = VoluntarioLogro = __decorate([
    (0, typeorm_1.Entity)({ name: 'voluntario_logro' })
], VoluntarioLogro);
//# sourceMappingURL=voluntario-logro.entity.js.map