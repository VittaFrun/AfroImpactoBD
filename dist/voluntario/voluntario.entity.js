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
exports.Voluntario = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const jornada_entity_1 = require("../jornada/jornada.entity");
const estado_entity_1 = require("../estado/estado.entity");
const voluntario_habilidad_entity_1 = require("../voluntario-habilidad/voluntario-habilidad.entity");
const asignacion_entity_1 = require("../asignacion/asignacion.entity");
let Voluntario = class Voluntario {
};
exports.Voluntario = Voluntario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", Number)
], Voluntario.prototype, "id_voluntario", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.Usuario, (usuario) => usuario.voluntario),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario', referencedColumnName: 'id_usuario' }),
    __metadata("design:type", user_entity_1.Usuario)
], Voluntario.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => jornada_entity_1.Jornada, (jornada) => jornada.voluntarios),
    (0, typeorm_1.JoinColumn)({ name: 'id_jornada' }),
    __metadata("design:type", jornada_entity_1.Jornada)
], Voluntario.prototype, "jornada", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_entity_1.Estado, (estado) => estado.voluntarios),
    (0, typeorm_1.JoinColumn)({ name: 'id_estado' }),
    __metadata("design:type", estado_entity_1.Estado)
], Voluntario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Voluntario.prototype, "disponibilidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => voluntario_habilidad_entity_1.VoluntarioHabilidad, (voluntarioHabilidad) => voluntarioHabilidad.voluntario),
    __metadata("design:type", Array)
], Voluntario.prototype, "voluntarioHabilidades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asignacion_entity_1.Asignacion, (asignacion) => asignacion.voluntario),
    __metadata("design:type", Array)
], Voluntario.prototype, "asignaciones", void 0);
exports.Voluntario = Voluntario = __decorate([
    (0, typeorm_1.Entity)({ name: 'voluntario' })
], Voluntario);
//# sourceMappingURL=voluntario.entity.js.map