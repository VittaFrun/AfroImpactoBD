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
exports.ConfiguracionSeguridad = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let ConfiguracionSeguridad = class ConfiguracionSeguridad {
};
exports.ConfiguracionSeguridad = ConfiguracionSeguridad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_config_seguridad' }),
    __metadata("design:type", Number)
], ConfiguracionSeguridad.prototype, "id_config_seguridad", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], ConfiguracionSeguridad.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.Usuario, (usuario) => usuario.configuracionesSeguridad),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", user_entity_1.Usuario)
], ConfiguracionSeguridad.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'two_factor_enabled', default: false }),
    __metadata("design:type", Boolean)
], ConfiguracionSeguridad.prototype, "two_factor_enabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'two_factor_secret', length: 255, nullable: true }),
    __metadata("design:type", String)
], ConfiguracionSeguridad.prototype, "two_factor_secret", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sso_enabled', default: false }),
    __metadata("design:type", Boolean)
], ConfiguracionSeguridad.prototype, "sso_enabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sso_provider', length: 50, nullable: true }),
    __metadata("design:type", String)
], ConfiguracionSeguridad.prototype, "sso_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'session_timeout', default: 3600 }),
    __metadata("design:type", Number)
], ConfiguracionSeguridad.prototype, "session_timeout", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ip_whitelist', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ConfiguracionSeguridad.prototype, "ip_whitelist", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'audit_log_enabled', default: false }),
    __metadata("design:type", Boolean)
], ConfiguracionSeguridad.prototype, "audit_log_enabled", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], ConfiguracionSeguridad.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizado_en' }),
    __metadata("design:type", Date)
], ConfiguracionSeguridad.prototype, "actualizado_en", void 0);
exports.ConfiguracionSeguridad = ConfiguracionSeguridad = __decorate([
    (0, typeorm_1.Entity)({ name: 'configuracion_seguridad' })
], ConfiguracionSeguridad);
//# sourceMappingURL=configuracion-seguridad.entity.js.map