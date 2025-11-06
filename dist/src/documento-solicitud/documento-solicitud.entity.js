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
exports.DocumentoSolicitud = void 0;
const typeorm_1 = require("typeorm");
const solicitud_inscripcion_entity_1 = require("../solicitud-inscripcion/solicitud-inscripcion.entity");
let DocumentoSolicitud = class DocumentoSolicitud {
};
exports.DocumentoSolicitud = DocumentoSolicitud;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_documento' }),
    __metadata("design:type", Number)
], DocumentoSolicitud.prototype, "id_documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_solicitud' }),
    __metadata("design:type", Number)
], DocumentoSolicitud.prototype, "id_solicitud", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => solicitud_inscripcion_entity_1.SolicitudInscripcion, (solicitud) => solicitud.documentos),
    (0, typeorm_1.JoinColumn)({ name: 'id_solicitud' }),
    __metadata("design:type", solicitud_inscripcion_entity_1.SolicitudInscripcion)
], DocumentoSolicitud.prototype, "solicitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, name: 'nombre_archivo' }),
    __metadata("design:type", String)
], DocumentoSolicitud.prototype, "nombre_archivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, name: 'ruta_archivo' }),
    __metadata("design:type", String)
], DocumentoSolicitud.prototype, "ruta_archivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, name: 'tipo_documento' }),
    __metadata("design:type", String)
], DocumentoSolicitud.prototype, "tipo_documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DocumentoSolicitud.prototype, "tama\u00F1o", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], DocumentoSolicitud.prototype, "creado_en", void 0);
exports.DocumentoSolicitud = DocumentoSolicitud = __decorate([
    (0, typeorm_1.Entity)({ name: 'documento_solicitud' })
], DocumentoSolicitud);
//# sourceMappingURL=documento-solicitud.entity.js.map