"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonacionProyectoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const donacion_proyecto_entity_1 = require("./donacion-proyecto.entity");
const donacion_proyecto_service_1 = require("./donacion-proyecto.service");
const donacion_proyecto_controller_1 = require("./donacion-proyecto.controller");
let DonacionProyectoModule = class DonacionProyectoModule {
};
exports.DonacionProyectoModule = DonacionProyectoModule;
exports.DonacionProyectoModule = DonacionProyectoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([donacion_proyecto_entity_1.DonacionProyecto])],
        controllers: [donacion_proyecto_controller_1.DonacionProyectoController],
        providers: [donacion_proyecto_service_1.DonacionProyectoService],
    })
], DonacionProyectoModule);
//# sourceMappingURL=donacion-proyecto.module.js.map