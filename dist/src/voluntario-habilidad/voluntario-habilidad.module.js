"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoluntarioHabilidadModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const voluntario_habilidad_entity_1 = require("./voluntario-habilidad.entity");
const voluntario_habilidad_service_1 = require("./voluntario-habilidad.service");
const voluntario_habilidad_controller_1 = require("./voluntario-habilidad.controller");
let VoluntarioHabilidadModule = class VoluntarioHabilidadModule {
};
exports.VoluntarioHabilidadModule = VoluntarioHabilidadModule;
exports.VoluntarioHabilidadModule = VoluntarioHabilidadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([voluntario_habilidad_entity_1.VoluntarioHabilidad])],
        controllers: [voluntario_habilidad_controller_1.VoluntarioHabilidadController],
        providers: [voluntario_habilidad_service_1.VoluntarioHabilidadService],
    })
], VoluntarioHabilidadModule);
//# sourceMappingURL=voluntario-habilidad.module.js.map