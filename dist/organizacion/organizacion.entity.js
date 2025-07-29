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
exports.Organizacion = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const donacion_entity_1 = require("../donacion/donacion.entity");
let Organizacion = class Organizacion {
};
exports.Organizacion = Organizacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_organizacion' }),
    __metadata("design:type", Number)
], Organizacion.prototype, "id_organizacion", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.Usuario, (usuario) => usuario.organizacion),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario', referencedColumnName: 'id_usuario' }),
    __metadata("design:type", user_entity_1.Usuario)
], Organizacion.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Organizacion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Organizacion.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, name: 'sitio_web' }),
    __metadata("design:type", String)
], Organizacion.prototype, "sitio_web", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Organizacion.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Organizacion.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'areas_enfoque' }),
    __metadata("design:type", String)
], Organizacion.prototype, "areas_enfoque", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'mision_vision' }),
    __metadata("design:type", String)
], Organizacion.prototype, "mision_vision", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => donacion_entity_1.Donacion, (donacion) => donacion.organizacion),
    __metadata("design:type", Array)
], Organizacion.prototype, "donaciones", void 0);
exports.Organizacion = Organizacion = __decorate([
    (0, typeorm_1.Entity)({ name: 'organizacion' })
], Organizacion);
//# sourceMappingURL=organizacion.entity.js.map