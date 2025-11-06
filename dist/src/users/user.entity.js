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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const rol_entity_1 = require("../rol/rol.entity");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
const preferencia_usuario_entity_1 = require("../preferencia-usuario/preferencia-usuario.entity");
const configuracion_seguridad_entity_1 = require("../configuracion-seguridad/configuracion-seguridad.entity");
const integracion_entity_1 = require("../integracion/integracion.entity");
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], Usuario.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 100, name: 'email' }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, name: 'password' }),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_rol', nullable: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "id_rol", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entity_1.Rol, (rol) => rol.usuarios),
    (0, typeorm_1.JoinColumn)({ name: 'id_rol' }),
    __metadata("design:type", rol_entity_1.Rol)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, name: 'tipo_usuario' }),
    __metadata("design:type", String)
], Usuario.prototype, "tipo_usuario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], Usuario.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizado_en' }),
    __metadata("design:type", Date)
], Usuario.prototype, "actualizado_en", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.usuario),
    __metadata("design:type", voluntario_entity_1.Voluntario)
], Usuario.prototype, "voluntario", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => organizacion_entity_1.Organizacion, (organizacion) => organizacion.usuario),
    __metadata("design:type", organizacion_entity_1.Organizacion)
], Usuario.prototype, "organizacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => preferencia_usuario_entity_1.PreferenciaUsuario, (preferenciaUsuario) => preferenciaUsuario.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "preferencias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => configuracion_seguridad_entity_1.ConfiguracionSeguridad, (configuracionSeguridad) => configuracionSeguridad.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "configuracionesSeguridad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => integracion_entity_1.Integracion, (integracion) => integracion.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "integraciones", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)({ name: 'usuario' })
], Usuario);
//# sourceMappingURL=user.entity.js.map