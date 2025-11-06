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
exports.FormularioInscripcionController = void 0;
const common_1 = require("@nestjs/common");
const formulario_inscripcion_service_1 = require("./formulario-inscripcion.service");
const create_formulario_inscripcion_dto_1 = require("./create-formulario-inscripcion.dto");
const update_formulario_inscripcion_dto_1 = require("./update-formulario-inscripcion.dto");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
let FormularioInscripcionController = class FormularioInscripcionController {
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findByProject(id) {
        return this.service.findByProject(id);
    }
    findActiveByProject(id) {
        return this.service.findActiveByProject(id);
    }
    findByOrganization(id) {
        return this.service.findByOrganization(id);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    remove(id) {
        return this.service.remove(id);
    }
    reorder(id, ordenes) {
        return this.service.reorder(id, ordenes);
    }
};
exports.FormularioInscripcionController = FormularioInscripcionController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_formulario_inscripcion_dto_1.CreateFormularioInscripcionDto]),
    __metadata("design:returntype", void 0)
], FormularioInscripcionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormularioInscripcionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('proyecto/:id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion', 'voluntario'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FormularioInscripcionController.prototype, "findByProject", null);
__decorate([
    (0, common_1.Get)('proyecto/:id/activos'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion', 'voluntario'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FormularioInscripcionController.prototype, "findActiveByProject", null);
__decorate([
    (0, common_1.Get)('organizacion/:id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FormularioInscripcionController.prototype, "findByOrganization", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FormularioInscripcionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_formulario_inscripcion_dto_1.UpdateFormularioInscripcionDto]),
    __metadata("design:returntype", void 0)
], FormularioInscripcionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FormularioInscripcionController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('proyecto/:id/reordenar'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], FormularioInscripcionController.prototype, "reorder", null);
exports.FormularioInscripcionController = FormularioInscripcionController = __decorate([
    (0, common_1.Controller)('formulario-inscripcion'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [formulario_inscripcion_service_1.FormularioInscripcionService])
], FormularioInscripcionController);
//# sourceMappingURL=formulario-inscripcion.controller.js.map