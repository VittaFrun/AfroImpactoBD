"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoluntarioHabilidadController = void 0;
const common_1 = require("@nestjs/common");
const voluntario_habilidad_service_1 = require("./voluntario-habilidad.service");
const create_voluntario_habilidad_dto_1 = require("./create-voluntario-habilidad.dto");
const update_voluntario_habilidad_dto_1 = require("./update-voluntario-habilidad.dto");
let VoluntarioHabilidadController = class VoluntarioHabilidadController {
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(idVoluntario, idHabilidad) {
        return this.service.findOne(+idVoluntario, +idHabilidad);
    }
    update(idVoluntario, idHabilidad, dto) {
        return this.service.update(+idVoluntario, +idHabilidad, dto);
    }
    remove(idVoluntario, idHabilidad) {
        return this.service.remove(+idVoluntario, +idHabilidad);
    }
};
exports.VoluntarioHabilidadController = VoluntarioHabilidadController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_voluntario_habilidad_dto_1.CreateVoluntarioHabilidadDto]),
    __metadata("design:returntype", void 0)
], VoluntarioHabilidadController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VoluntarioHabilidadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':idVoluntario/:idHabilidad'),
    __param(0, (0, common_1.Param)('idVoluntario')),
    __param(1, (0, common_1.Param)('idHabilidad')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VoluntarioHabilidadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':idVoluntario/:idHabilidad'),
    __param(0, (0, common_1.Param)('idVoluntario')),
    __param(1, (0, common_1.Param)('idHabilidad')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_voluntario_habilidad_dto_1.UpdateVoluntarioHabilidadDto]),
    __metadata("design:returntype", void 0)
], VoluntarioHabilidadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':idVoluntario/:idHabilidad'),
    __param(0, (0, common_1.Param)('idVoluntario')),
    __param(1, (0, common_1.Param)('idHabilidad')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VoluntarioHabilidadController.prototype, "remove", null);
exports.VoluntarioHabilidadController = VoluntarioHabilidadController = __decorate([
    (0, common_1.Controller)('voluntario-habilidad'),
    __metadata("design:paramtypes", [voluntario_habilidad_service_1.VoluntarioHabilidadService])
], VoluntarioHabilidadController);
//# sourceMappingURL=voluntario-habilidad.controller.js.map