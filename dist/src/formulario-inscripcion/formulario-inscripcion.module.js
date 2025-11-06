"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioInscripcionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const formulario_inscripcion_entity_1 = require("./formulario-inscripcion.entity");
const formulario_inscripcion_service_1 = require("./formulario-inscripcion.service");
const formulario_inscripcion_controller_1 = require("./formulario-inscripcion.controller");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
let FormularioInscripcionModule = class FormularioInscripcionModule {
};
exports.FormularioInscripcionModule = FormularioInscripcionModule;
exports.FormularioInscripcionModule = FormularioInscripcionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([formulario_inscripcion_entity_1.FormularioInscripcion, proyecto_entity_1.Proyecto])],
        controllers: [formulario_inscripcion_controller_1.FormularioInscripcionController],
        providers: [formulario_inscripcion_service_1.FormularioInscripcionService],
        exports: [formulario_inscripcion_service_1.FormularioInscripcionService],
    })
], FormularioInscripcionModule);
//# sourceMappingURL=formulario-inscripcion.module.js.map