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
exports.Movimiento = void 0;
const typeorm_1 = require("typeorm");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const tarea_entity_1 = require("../tarea/tarea.entity");
const donacion_entity_1 = require("../donacion/donacion.entity");
let Movimiento = class Movimiento {
};
exports.Movimiento = Movimiento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_movimiento' }),
    __metadata("design:type", Number)
], Movimiento.prototype, "id_movimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Movimiento.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Movimiento.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Movimiento.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], Movimiento.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Movimiento.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Movimiento.prototype, "comprobante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto, (proyecto) => proyecto.movimientos, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], Movimiento.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tarea_entity_1.Tarea, (tarea) => tarea.movimientos, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_tarea' }),
    __metadata("design:type", tarea_entity_1.Tarea)
], Movimiento.prototype, "tarea", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => donacion_entity_1.Donacion, (donacion) => donacion.movimientos, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_donacion' }),
    __metadata("design:type", donacion_entity_1.Donacion)
], Movimiento.prototype, "donacion", void 0);
exports.Movimiento = Movimiento = __decorate([
    (0, typeorm_1.Entity)({ name: 'movimiento' })
], Movimiento);
//# sourceMappingURL=movimiento.entity.js.map