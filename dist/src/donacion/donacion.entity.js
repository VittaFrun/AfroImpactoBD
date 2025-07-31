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
exports.Donacion = void 0;
const typeorm_1 = require("typeorm");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
const estado_entity_1 = require("../estado/estado.entity");
const donacion_proyecto_entity_1 = require("../donacion-proyecto/donacion-proyecto.entity");
const movimiento_entity_1 = require("../movimiento/movimiento.entity");
const metodopago_entity_1 = require("../metodopago/metodopago.entity");
let Donacion = class Donacion {
};
exports.Donacion = Donacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_donacion' }),
    __metadata("design:type", Number)
], Donacion.prototype, "id_donacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_organizacion' }),
    __metadata("design:type", Number)
], Donacion.prototype, "id_organizacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organizacion_entity_1.Organizacion, (organizacion) => organizacion.donaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_organizacion' }),
    __metadata("design:type", organizacion_entity_1.Organizacion)
], Donacion.prototype, "organizacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_metodo' }),
    __metadata("design:type", Number)
], Donacion.prototype, "id_metodo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => metodopago_entity_1.MetodoPago, (metodoPago) => metodoPago.donaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_metodo' }),
    __metadata("design:type", metodopago_entity_1.MetodoPago)
], Donacion.prototype, "metodoPago", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 12, scale: 2, name: 'monto_total' }),
    __metadata("design:type", Number)
], Donacion.prototype, "monto_total", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Donacion.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Donacion.prototype, "condiciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Donacion.prototype, "verificado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_estado' }),
    __metadata("design:type", Number)
], Donacion.prototype, "id_estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_entity_1.Estado, (estado) => estado.donaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_estado' }),
    __metadata("design:type", estado_entity_1.Estado)
], Donacion.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => donacion_proyecto_entity_1.DonacionProyecto, (donacionProyecto) => donacionProyecto.donacion),
    __metadata("design:type", Array)
], Donacion.prototype, "donacionProyectos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => movimiento_entity_1.Movimiento, (movimiento) => movimiento.donacion),
    __metadata("design:type", Array)
], Donacion.prototype, "movimientos", void 0);
exports.Donacion = Donacion = __decorate([
    (0, typeorm_1.Entity)({ name: 'donacion' })
], Donacion);
//# sourceMappingURL=donacion.entity.js.map