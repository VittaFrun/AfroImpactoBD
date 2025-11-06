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
exports.Certificado = void 0;
const typeorm_1 = require("typeorm");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
let Certificado = class Certificado {
};
exports.Certificado = Certificado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_certificado' }),
    __metadata("design:type", Number)
], Certificado.prototype, "id_certificado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_voluntario' }),
    __metadata("design:type", Number)
], Certificado.prototype, "id_voluntario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => voluntario_entity_1.Voluntario, (voluntario) => voluntario.certificados),
    (0, typeorm_1.JoinColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", voluntario_entity_1.Voluntario)
], Certificado.prototype, "voluntario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_proyecto', nullable: true }),
    __metadata("design:type", Number)
], Certificado.prototype, "id_proyecto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto, (proyecto) => proyecto.certificados, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], Certificado.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Certificado.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Certificado.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Certificado.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_emision' }),
    __metadata("design:type", Date)
], Certificado.prototype, "fecha_emision", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_expiracion', nullable: true }),
    __metadata("design:type", Date)
], Certificado.prototype, "fecha_expiracion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'codigo_verificacion', length: 50, unique: true }),
    __metadata("design:type", String)
], Certificado.prototype, "codigo_verificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'archivo_pdf', length: 255, nullable: true }),
    __metadata("design:type", String)
], Certificado.prototype, "archivo_pdf", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], Certificado.prototype, "creado_en", void 0);
exports.Certificado = Certificado = __decorate([
    (0, typeorm_1.Entity)({ name: 'certificado' })
], Certificado);
//# sourceMappingURL=certificado.entity.js.map