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
exports.Logro = void 0;
const typeorm_1 = require("typeorm");
const voluntario_logro_entity_1 = require("../voluntario-logro/voluntario-logro.entity");
let Logro = class Logro {
};
exports.Logro = Logro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_logro' }),
    __metadata("design:type", Number)
], Logro.prototype, "id_logro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Logro.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Logro.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Logro.prototype, "icono", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Logro.prototype, "puntos", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Logro.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Logro.prototype, "condicion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], Logro.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => voluntario_logro_entity_1.VoluntarioLogro, (voluntarioLogro) => voluntarioLogro.logro),
    __metadata("design:type", Array)
], Logro.prototype, "voluntarioLogros", void 0);
exports.Logro = Logro = __decorate([
    (0, typeorm_1.Entity)({ name: 'logro' })
], Logro);
//# sourceMappingURL=logro.entity.js.map