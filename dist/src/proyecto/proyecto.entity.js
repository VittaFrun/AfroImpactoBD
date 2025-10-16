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
exports.Proyecto = void 0;
const typeorm_1 = require("typeorm");
const estado_entity_1 = require("../estado/estado.entity");
const fase_entity_1 = require("../fase/fase.entity");
const donacion_proyecto_entity_1 = require("../donacion-proyecto/donacion-proyecto.entity");
const movimiento_entity_1 = require("../movimiento/movimiento.entity");
const reporte_entity_1 = require("../reporte/reporte.entity");
const evaluacion_entity_1 = require("../evaluacion/evaluacion.entity");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
let Proyecto = class Proyecto {
};
exports.Proyecto = Proyecto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", Number)
], Proyecto.prototype, "id_proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Proyecto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Proyecto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Proyecto.prototype, "objetivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Proyecto.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_inicio' }),
    __metadata("design:type", Date)
], Proyecto.prototype, "fecha_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_fin' }),
    __metadata("design:type", Date)
], Proyecto.prototype, "fecha_fin", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, name: 'imagen_principal', nullable: true }),
    __metadata("design:type", String)
], Proyecto.prototype, "imagen_principal", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Proyecto.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_estado' }),
    __metadata("design:type", Number)
], Proyecto.prototype, "id_estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_entity_1.Estado, (estado) => estado.proyectos),
    (0, typeorm_1.JoinColumn)({ name: 'id_estado' }),
    __metadata("design:type", estado_entity_1.Estado)
], Proyecto.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_organizacion' }),
    __metadata("design:type", Number)
], Proyecto.prototype, "id_organizacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organizacion_entity_1.Organizacion, (organizacion) => organizacion.proyectos),
    (0, typeorm_1.JoinColumn)({ name: 'id_organizacion' }),
    __metadata("design:type", organizacion_entity_1.Organizacion)
], Proyecto.prototype, "organizacion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], Proyecto.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizado_en' }),
    __metadata("design:type", Date)
], Proyecto.prototype, "actualizado_en", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => fase_entity_1.Fase, (fase) => fase.proyecto),
    __metadata("design:type", Array)
], Proyecto.prototype, "fases", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => donacion_proyecto_entity_1.DonacionProyecto, (donacionProyecto) => donacionProyecto.proyecto),
    __metadata("design:type", Array)
], Proyecto.prototype, "donacionProyectos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => movimiento_entity_1.Movimiento, (movimiento) => movimiento.proyecto),
    __metadata("design:type", Array)
], Proyecto.prototype, "movimientos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reporte_entity_1.Reporte, (reporte) => reporte.proyecto),
    __metadata("design:type", Array)
], Proyecto.prototype, "reportes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evaluacion_entity_1.Evaluacion, (evaluacion) => evaluacion.proyecto),
    __metadata("design:type", Array)
], Proyecto.prototype, "evaluaciones", void 0);
exports.Proyecto = Proyecto = __decorate([
    (0, typeorm_1.Entity)({ name: 'proyecto' })
], Proyecto);
//# sourceMappingURL=proyecto.entity.js.map