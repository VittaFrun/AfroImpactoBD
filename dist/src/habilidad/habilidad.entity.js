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
exports.Habilidad = void 0;
const typeorm_1 = require("typeorm");
const voluntario_habilidad_entity_1 = require("../voluntario-habilidad/voluntario-habilidad.entity");
let Habilidad = class Habilidad {
};
exports.Habilidad = Habilidad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_habilidad' }),
    __metadata("design:type", Number)
], Habilidad.prototype, "id_habilidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Habilidad.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Habilidad.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => voluntario_habilidad_entity_1.VoluntarioHabilidad, (voluntarioHabilidad) => voluntarioHabilidad.habilidad),
    __metadata("design:type", Array)
], Habilidad.prototype, "voluntarioHabilidades", void 0);
exports.Habilidad = Habilidad = __decorate([
    (0, typeorm_1.Entity)({ name: 'habilidad' })
], Habilidad);
//# sourceMappingURL=habilidad.entity.js.map