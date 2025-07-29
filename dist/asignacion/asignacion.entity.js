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
exports.Asignacion = void 0;
const typeorm_1 = require("typeorm");
const tarea_entity_1 = require("../tarea/tarea.entity");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
let Asignacion = class Asignacion {
};
exports.Asignacion = Asignacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_asignacion' }),
    __metadata("design:type", Number)
], Asignacion.prototype, "id_asignacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tarea_entity_1.Tarea, (tarea) => tarea.asignaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_tarea' }),
    __metadata("design:type", tarea_entity_1.Tarea)
], Asignacion.prototype, "tarea", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.asignaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", voluntario_entity_1.Voluntario)
], Asignacion.prototype, "voluntario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, name: 'rol_asignado' }),
    __metadata("design:type", String)
], Asignacion.prototype, "rol_asignado", void 0);
exports.Asignacion = Asignacion = __decorate([
    (0, typeorm_1.Entity)({ name: 'asignacion' })
], Asignacion);
//# sourceMappingURL=asignacion.entity.js.map