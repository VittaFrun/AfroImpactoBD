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
exports.ProyectoBeneficioController = void 0;
const common_1 = require("@nestjs/common");
const proyecto_beneficio_service_1 = require("./proyecto-beneficio.service");
const create_proyecto_beneficio_dto_1 = require("./create-proyecto-beneficio.dto");
const update_proyecto_beneficio_dto_1 = require("./update-proyecto-beneficio.dto");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
let ProyectoBeneficioController = class ProyectoBeneficioController {
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    update(id, dto) {
        return this.service.update(+id, dto);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.ProyectoBeneficioController = ProyectoBeneficioController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_proyecto_beneficio_dto_1.CreateProyectoBeneficioDto]),
    __metadata("design:returntype", void 0)
], ProyectoBeneficioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('proyecto/:id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion', 'voluntario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProyectoBeneficioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('proyecto/:id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_proyecto_beneficio_dto_1.UpdateProyectoBeneficioDto]),
    __metadata("design:returntype", void 0)
], ProyectoBeneficioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('proyecto/:id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProyectoBeneficioController.prototype, "remove", null);
exports.ProyectoBeneficioController = ProyectoBeneficioController = __decorate([
    (0, common_1.Controller)('proyecto-beneficio'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [proyecto_beneficio_service_1.ProyectoBeneficioService])
], ProyectoBeneficioController);
//# sourceMappingURL=proyecto-beneficio.controller.js.map