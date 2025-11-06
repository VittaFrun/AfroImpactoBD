"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoluntarioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const voluntario_entity_1 = require("./voluntario.entity");
const voluntario_service_1 = require("./voluntario.service");
const voluntario_controller_1 = require("./voluntario.controller");
const user_entity_1 = require("../users/user.entity");
const estado_entity_1 = require("../estado/estado.entity");
const jornada_entity_1 = require("../jornada/jornada.entity");
const horas_voluntariadas_entity_1 = require("../horas-voluntariadas/horas-voluntariadas.entity");
const voluntario_logro_entity_1 = require("../voluntario-logro/voluntario-logro.entity");
const certificado_entity_1 = require("../certificado/certificado.entity");
const logro_entity_1 = require("../logro/logro.entity");
let VoluntarioModule = class VoluntarioModule {
};
exports.VoluntarioModule = VoluntarioModule;
exports.VoluntarioModule = VoluntarioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([voluntario_entity_1.Voluntario, user_entity_1.Usuario, estado_entity_1.Estado, jornada_entity_1.Jornada, horas_voluntariadas_entity_1.HorasVoluntariadas, voluntario_logro_entity_1.VoluntarioLogro, certificado_entity_1.Certificado, logro_entity_1.Logro])],
        controllers: [voluntario_controller_1.VoluntarioController],
        providers: [voluntario_service_1.VoluntarioService],
        exports: [voluntario_service_1.VoluntarioService],
    })
], VoluntarioModule);
//# sourceMappingURL=voluntario.module.js.map