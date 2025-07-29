"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const proyecto_entity_1 = require("./proyecto.entity");
const proyecto_service_1 = require("./proyecto.service");
const proyecto_controller_1 = require("./proyecto.controller");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
let ProyectoModule = class ProyectoModule {
};
exports.ProyectoModule = ProyectoModule;
exports.ProyectoModule = ProyectoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([proyecto_entity_1.Proyecto, organizacion_entity_1.Organizacion])],
        controllers: [proyecto_controller_1.ProyectoController],
        providers: [proyecto_service_1.ProyectoService],
    })
], ProyectoModule);
//# sourceMappingURL=proyecto.module.js.map