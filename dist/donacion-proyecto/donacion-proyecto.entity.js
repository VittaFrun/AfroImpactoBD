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
exports.DonacionProyecto = void 0;
const typeorm_1 = require("typeorm");
const donacion_entity_1 = require("../donacion/donacion.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
let DonacionProyecto = class DonacionProyecto {
};
exports.DonacionProyecto = DonacionProyecto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_donacion_proyecto' }),
    __metadata("design:type", Number)
], DonacionProyecto.prototype, "id_donacion_proyecto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => donacion_entity_1.Donacion, (donacion) => donacion.donacionProyectos),
    (0, typeorm_1.JoinColumn)({ name: 'id_donacion' }),
    __metadata("design:type", donacion_entity_1.Donacion)
], DonacionProyecto.prototype, "donacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto, (proyecto) => proyecto.donacionProyectos),
    (0, typeorm_1.JoinColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], DonacionProyecto.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 12, scale: 2, name: 'monto_asignado' }),
    __metadata("design:type", Number)
], DonacionProyecto.prototype, "monto_asignado", void 0);
exports.DonacionProyecto = DonacionProyecto = __decorate([
    (0, typeorm_1.Entity)({ name: 'donacion_proyecto' })
], DonacionProyecto);
//# sourceMappingURL=donacion-proyecto.entity.js.map