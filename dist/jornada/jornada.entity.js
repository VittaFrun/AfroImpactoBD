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
exports.Jornada = void 0;
const typeorm_1 = require("typeorm");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
let Jornada = class Jornada {
};
exports.Jornada = Jornada;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_jornada' }),
    __metadata("design:type", Number)
], Jornada.prototype, "id_jornada", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Jornada.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.jornada),
    __metadata("design:type", Array)
], Jornada.prototype, "voluntarios", void 0);
exports.Jornada = Jornada = __decorate([
    (0, typeorm_1.Entity)({ name: 'jornada' })
], Jornada);
//# sourceMappingURL=jornada.entity.js.map