"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorasVoluntariadasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const horas_voluntariadas_entity_1 = require("./horas-voluntariadas.entity");
const horas_voluntariadas_service_1 = require("./horas-voluntariadas.service");
const horas_voluntariadas_controller_1 = require("./horas-voluntariadas.controller");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const tarea_entity_1 = require("../tarea/tarea.entity");
const asignacion_entity_1 = require("../asignacion/asignacion.entity");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
let HorasVoluntariadasModule = class HorasVoluntariadasModule {
};
exports.HorasVoluntariadasModule = HorasVoluntariadasModule;
exports.HorasVoluntariadasModule = HorasVoluntariadasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                horas_voluntariadas_entity_1.HorasVoluntariadas,
                voluntario_entity_1.Voluntario,
                proyecto_entity_1.Proyecto,
                tarea_entity_1.Tarea,
                asignacion_entity_1.Asignacion,
                organizacion_entity_1.Organizacion
            ])],
        controllers: [horas_voluntariadas_controller_1.HorasVoluntariadasController],
        providers: [horas_voluntariadas_service_1.HorasVoluntariadasService],
        exports: [horas_voluntariadas_service_1.HorasVoluntariadasService],
    })
], HorasVoluntariadasModule);
//# sourceMappingURL=horas-voluntariadas.module.js.map