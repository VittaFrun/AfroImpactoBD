"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoBeneficioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const proyecto_beneficio_entity_1 = require("./proyecto-beneficio.entity");
const proyecto_beneficio_service_1 = require("./proyecto-beneficio.service");
const proyecto_beneficio_controller_1 = require("./proyecto-beneficio.controller");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
let ProyectoBeneficioModule = class ProyectoBeneficioModule {
};
exports.ProyectoBeneficioModule = ProyectoBeneficioModule;
exports.ProyectoBeneficioModule = ProyectoBeneficioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([proyecto_beneficio_entity_1.ProyectoBeneficio, proyecto_entity_1.Proyecto])],
        controllers: [proyecto_beneficio_controller_1.ProyectoBeneficioController],
        providers: [proyecto_beneficio_service_1.ProyectoBeneficioService],
        exports: [proyecto_beneficio_service_1.ProyectoBeneficioService],
    })
], ProyectoBeneficioModule);
//# sourceMappingURL=proyecto-beneficio.module.js.map