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
exports.Integracion = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let Integracion = class Integracion {
};
exports.Integracion = Integracion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_integracion' }),
    __metadata("design:type", Number)
], Integracion.prototype, "id_integracion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], Integracion.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.Usuario, (usuario) => usuario.integraciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", user_entity_1.Usuario)
], Integracion.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Integracion.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Integracion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Integracion.prototype, "habilitada", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'token_acceso', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Integracion.prototype, "token_acceso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'token_refresh', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Integracion.prototype, "token_refresh", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Integracion.prototype, "configuracion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expiracion_token', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Integracion.prototype, "expiracion_token", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], Integracion.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizado_en' }),
    __metadata("design:type", Date)
], Integracion.prototype, "actualizado_en", void 0);
exports.Integracion = Integracion = __decorate([
    (0, typeorm_1.Entity)({ name: 'integracion' })
], Integracion);
//# sourceMappingURL=integracion.entity.js.map