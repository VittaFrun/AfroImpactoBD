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
exports.FormularioInscripcion = void 0;
const typeorm_1 = require("typeorm");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
let FormularioInscripcion = class FormularioInscripcion {
};
exports.FormularioInscripcion = FormularioInscripcion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_formulario' }),
    __metadata("design:type", Number)
], FormularioInscripcion.prototype, "id_formulario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_proyecto', nullable: true }),
    __metadata("design:type", Number)
], FormularioInscripcion.prototype, "id_proyecto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], FormularioInscripcion.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_organizacion', nullable: true }),
    __metadata("design:type", Number)
], FormularioInscripcion.prototype, "id_organizacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organizacion_entity_1.Organizacion, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_organizacion' }),
    __metadata("design:type", organizacion_entity_1.Organizacion)
], FormularioInscripcion.prototype, "organizacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, name: 'nombre_campo' }),
    __metadata("design:type", String)
], FormularioInscripcion.prototype, "nombre_campo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['text', 'textarea', 'number', 'date', 'select', 'file'],
        name: 'tipo_campo'
    }),
    __metadata("design:type", String)
], FormularioInscripcion.prototype, "tipo_campo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], FormularioInscripcion.prototype, "etiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], FormularioInscripcion.prototype, "placeholder", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FormularioInscripcion.prototype, "requerido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FormularioInscripcion.prototype, "opciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], FormularioInscripcion.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], FormularioInscripcion.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], FormularioInscripcion.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizado_en' }),
    __metadata("design:type", Date)
], FormularioInscripcion.prototype, "actualizado_en", void 0);
exports.FormularioInscripcion = FormularioInscripcion = __decorate([
    (0, typeorm_1.Entity)({ name: 'formulario_inscripcion' })
], FormularioInscripcion);
//# sourceMappingURL=formulario-inscripcion.entity.js.map