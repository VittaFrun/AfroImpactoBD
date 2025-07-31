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
exports.Estado = void 0;
const typeorm_1 = require("typeorm");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const donacion_entity_1 = require("../donacion/donacion.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const tarea_entity_1 = require("../tarea/tarea.entity");
let Estado = class Estado {
};
exports.Estado = Estado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_estado' }),
    __metadata("design:type", Number)
], Estado.prototype, "id_estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Estado.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.estado),
    __metadata("design:type", Array)
], Estado.prototype, "voluntarios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => donacion_entity_1.Donacion, (donacion) => donacion.estado),
    __metadata("design:type", Array)
], Estado.prototype, "donaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => proyecto_entity_1.Proyecto, (proyecto) => proyecto.estado),
    __metadata("design:type", Array)
], Estado.prototype, "proyectos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tarea_entity_1.Tarea, (tarea) => tarea.estado),
    __metadata("design:type", Array)
], Estado.prototype, "tareas", void 0);
exports.Estado = Estado = __decorate([
    (0, typeorm_1.Entity)({ name: 'estado' })
], Estado);
//# sourceMappingURL=estado.entity.js.map