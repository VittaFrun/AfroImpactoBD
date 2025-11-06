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
exports.SolicitudInscripcion = void 0;
const typeorm_1 = require("typeorm");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const documento_solicitud_entity_1 = require("../documento-solicitud/documento-solicitud.entity");
let SolicitudInscripcion = class SolicitudInscripcion {
};
exports.SolicitudInscripcion = SolicitudInscripcion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_solicitud' }),
    __metadata("design:type", Number)
], SolicitudInscripcion.prototype, "id_solicitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_proyecto' }),
    __metadata("design:type", Number)
], SolicitudInscripcion.prototype, "id_proyecto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto),
    (0, typeorm_1.JoinColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], SolicitudInscripcion.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_voluntario' }),
    __metadata("design:type", Number)
], SolicitudInscripcion.prototype, "id_voluntario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => voluntario_entity_1.Voluntario),
    (0, typeorm_1.JoinColumn)({ name: 'id_voluntario' }),
    __metadata("design:type", voluntario_entity_1.Voluntario)
], SolicitudInscripcion.prototype, "voluntario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['pendiente', 'aprobada', 'rechazada'],
        default: 'pendiente'
    }),
    __metadata("design:type", String)
], SolicitudInscripcion.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SolicitudInscripcion.prototype, "motivacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SolicitudInscripcion.prototype, "disponibilidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'experiencia_relacionada' }),
    __metadata("design:type", String)
], SolicitudInscripcion.prototype, "experiencia_relacionada", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'notas_organizacion' }),
    __metadata("design:type", String)
], SolicitudInscripcion.prototype, "notas_organizacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'fecha_solicitud' }),
    __metadata("design:type", Date)
], SolicitudInscripcion.prototype, "fecha_solicitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true, name: 'fecha_revision' }),
    __metadata("design:type", Date)
], SolicitudInscripcion.prototype, "fecha_revision", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], SolicitudInscripcion.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizado_en' }),
    __metadata("design:type", Date)
], SolicitudInscripcion.prototype, "actualizado_en", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => documento_solicitud_entity_1.DocumentoSolicitud, (documento) => documento.solicitud),
    __metadata("design:type", Array)
], SolicitudInscripcion.prototype, "documentos", void 0);
exports.SolicitudInscripcion = SolicitudInscripcion = __decorate([
    (0, typeorm_1.Entity)({ name: 'solicitud_inscripcion' })
], SolicitudInscripcion);
//# sourceMappingURL=solicitud-inscripcion.entity.js.map