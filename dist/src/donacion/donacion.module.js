"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonacionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const donacion_entity_1 = require("./donacion.entity");
const donacion_service_1 = require("./donacion.service");
const donacion_controller_1 = require("./donacion.controller");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
let DonacionModule = class DonacionModule {
};
exports.DonacionModule = DonacionModule;
exports.DonacionModule = DonacionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([donacion_entity_1.Donacion, organizacion_entity_1.Organizacion])],
        controllers: [donacion_controller_1.DonacionController],
        providers: [donacion_service_1.DonacionService],
        exports: [donacion_service_1.DonacionService],
    })
], DonacionModule);
//# sourceMappingURL=donacion.module.js.map