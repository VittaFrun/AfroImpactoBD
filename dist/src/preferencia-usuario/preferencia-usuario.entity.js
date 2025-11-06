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
exports.PreferenciaUsuario = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let PreferenciaUsuario = class PreferenciaUsuario {
};
exports.PreferenciaUsuario = PreferenciaUsuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_preferencia' }),
    __metadata("design:type", Number)
], PreferenciaUsuario.prototype, "id_preferencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], PreferenciaUsuario.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.Usuario, (usuario) => usuario.preferencias),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", user_entity_1.Usuario)
], PreferenciaUsuario.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'notificaciones_email', default: true }),
    __metadata("design:type", Boolean)
], PreferenciaUsuario.prototype, "notificaciones_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'resumen_semanal', default: true }),
    __metadata("design:type", Boolean)
], PreferenciaUsuario.prototype, "resumen_semanal", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], PreferenciaUsuario.prototype, "recordatorios", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'notificaciones_push', default: true }),
    __metadata("design:type", Boolean)
], PreferenciaUsuario.prototype, "notificaciones_push", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'modo_oscuro', default: false }),
    __metadata("design:type", Boolean)
], PreferenciaUsuario.prototype, "modo_oscuro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, default: 'es' }),
    __metadata("design:type", String)
], PreferenciaUsuario.prototype, "idioma", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'zona_horaria', length: 50, default: 'America/Bogota' }),
    __metadata("design:type", String)
], PreferenciaUsuario.prototype, "zona_horaria", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], PreferenciaUsuario.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizado_en' }),
    __metadata("design:type", Date)
], PreferenciaUsuario.prototype, "actualizado_en", void 0);
exports.PreferenciaUsuario = PreferenciaUsuario = __decorate([
    (0, typeorm_1.Entity)({ name: 'preferencia_usuario' })
], PreferenciaUsuario);
//# sourceMappingURL=preferencia-usuario.entity.js.map