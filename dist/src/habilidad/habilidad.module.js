"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabilidadModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const habilidad_entity_1 = require("./habilidad.entity");
const habilidad_service_1 = require("./habilidad.service");
const habilidad_controller_1 = require("./habilidad.controller");
let HabilidadModule = class HabilidadModule {
};
exports.HabilidadModule = HabilidadModule;
exports.HabilidadModule = HabilidadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([habilidad_entity_1.Habilidad])],
        controllers: [habilidad_controller_1.HabilidadController],
        providers: [habilidad_service_1.HabilidadService],
    })
], HabilidadModule);
//# sourceMappingURL=habilidad.module.js.map