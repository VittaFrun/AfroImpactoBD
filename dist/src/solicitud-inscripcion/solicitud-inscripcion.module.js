"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudInscripcionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const solicitud_inscripcion_entity_1 = require("./solicitud-inscripcion.entity");
const solicitud_inscripcion_service_1 = require("./solicitud-inscripcion.service");
const solicitud_inscripcion_controller_1 = require("./solicitud-inscripcion.controller");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const documento_solicitud_module_1 = require("../documento-solicitud/documento-solicitud.module");
const voluntario_module_1 = require("../voluntario/voluntario.module");
let SolicitudInscripcionModule = class SolicitudInscripcionModule {
};
exports.SolicitudInscripcionModule = SolicitudInscripcionModule;
exports.SolicitudInscripcionModule = SolicitudInscripcionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([solicitud_inscripcion_entity_1.SolicitudInscripcion, proyecto_entity_1.Proyecto, voluntario_entity_1.Voluntario]),
            voluntario_module_1.VoluntarioModule,
            documento_solicitud_module_1.DocumentoSolicitudModule
        ],
        controllers: [solicitud_inscripcion_controller_1.SolicitudInscripcionController],
        providers: [solicitud_inscripcion_service_1.SolicitudInscripcionService],
        exports: [solicitud_inscripcion_service_1.SolicitudInscripcionService],
    })
], SolicitudInscripcionModule);
//# sourceMappingURL=solicitud-inscripcion.module.js.map