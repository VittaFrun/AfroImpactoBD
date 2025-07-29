"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reporte_entity_1 = require("./reporte.entity");
const reporte_service_1 = require("./reporte.service");
const reporte_controller_1 = require("./reporte.controller");
let ReporteModule = class ReporteModule {
};
exports.ReporteModule = ReporteModule;
exports.ReporteModule = ReporteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reporte_entity_1.Reporte])],
        controllers: [reporte_controller_1.ReporteController],
        providers: [reporte_service_1.ReporteService],
    })
], ReporteModule);
//# sourceMappingURL=reporte.module.js.map