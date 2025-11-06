"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoSolicitudModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const documento_solicitud_entity_1 = require("./documento-solicitud.entity");
const documento_solicitud_service_1 = require("./documento-solicitud.service");
const documento_solicitud_controller_1 = require("./documento-solicitud.controller");
const solicitud_inscripcion_entity_1 = require("../solicitud-inscripcion/solicitud-inscripcion.entity");
let DocumentoSolicitudModule = class DocumentoSolicitudModule {
};
exports.DocumentoSolicitudModule = DocumentoSolicitudModule;
exports.DocumentoSolicitudModule = DocumentoSolicitudModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([documento_solicitud_entity_1.DocumentoSolicitud, solicitud_inscripcion_entity_1.SolicitudInscripcion])],
        controllers: [documento_solicitud_controller_1.DocumentoSolicitudController],
        providers: [documento_solicitud_service_1.DocumentoSolicitudService],
        exports: [documento_solicitud_service_1.DocumentoSolicitudService],
    })
], DocumentoSolicitudModule);
//# sourceMappingURL=documento-solicitud.module.js.map