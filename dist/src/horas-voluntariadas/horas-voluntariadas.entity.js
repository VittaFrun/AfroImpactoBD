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
exports.HorasVoluntariadas = void 0;
const typeorm_1 = require("typeorm");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const tarea_entity_1 = require("../tarea/tarea.entity");
let HorasVoluntariadas = class HorasVoluntariadas {
};
exports.HorasVoluntariadas = HorasVoluntariadas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_horas' }),
    __metadata("design:type", Number)
], HorasVoluntariadas.prototype, "id_horas", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_voluntario' }),
    __metadata("design:type", Number)
], HorasVoluntariadas.prototype, "id_voluntario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.horasVoluntariadas),
    (0, typeorm_1.JoinColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", voluntario_entity_1.Voluntario)
], HorasVoluntariadas.prototype, "voluntario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_proyecto' }),
    __metadata("design:type", Number)
], HorasVoluntariadas.prototype, "id_proyecto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto, (proyecto) => proyecto.horasVoluntariadas),
    (0, typeorm_1.JoinColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], HorasVoluntariadas.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_tarea', nullable: true }),
    __metadata("design:type", Number)
], HorasVoluntariadas.prototype, "id_tarea", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tarea_entity_1.Tarea, (tarea) => tarea.horasVoluntariadas, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_tarea' }),
    __metadata("design:type", tarea_entity_1.Tarea)
], HorasVoluntariadas.prototype, "tarea", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], HorasVoluntariadas.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horas_trabajadas', type: 'decimal', precision: 4, scale: 2 }),
    __metadata("design:type", Number)
], HorasVoluntariadas.prototype, "horas_trabajadas", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], HorasVoluntariadas.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], HorasVoluntariadas.prototype, "verificada", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], HorasVoluntariadas.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizado_en' }),
    __metadata("design:type", Date)
], HorasVoluntariadas.prototype, "actualizado_en", void 0);
exports.HorasVoluntariadas = HorasVoluntariadas = __decorate([
    (0, typeorm_1.Entity)({ name: 'horas_voluntariadas' })
], HorasVoluntariadas);
//# sourceMappingURL=horas-voluntariadas.entity.js.map