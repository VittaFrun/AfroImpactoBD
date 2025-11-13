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
exports.HorasVoluntariadasController = void 0;
const common_1 = require("@nestjs/common");
const horas_voluntariadas_service_1 = require("./horas-voluntariadas.service");
const create_horas_voluntariadas_dto_1 = require("./create-horas-voluntariadas.dto");
const update_horas_voluntariadas_dto_1 = require("./update-horas-voluntariadas.dto");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const get_user_decorator_1 = require("../common/decorators/get-user.decorator");
const user_entity_1 = require("../users/user.entity");
let HorasVoluntariadasController = class HorasVoluntariadasController {
    constructor(service) {
        this.service = service;
    }
    create(dto, user) {
        return this.service.create(dto, user);
    }
    findAllByVolunteer(user) {
        return this.service.findAllByVolunteer(user);
    }
    findByProject(idProyecto, user) {
        return this.service.findByProject(+idProyecto, user);
    }
    getResumenByProject(idProyecto, user) {
        return this.service.getResumenByProject(+idProyecto, user);
    }
    findAllByProjectForOrganization(idProyecto, user) {
        return this.service.findAllByProjectForOrganization(+idProyecto, user);
    }
    update(id, dto, user) {
        return this.service.update(+id, dto, user);
    }
    verificar(id, body, user) {
        return this.service.verificar(+id, body.verificada, user);
    }
    remove(id, user) {
        return this.service.remove(+id, user);
    }
};
exports.HorasVoluntariadasController = HorasVoluntariadasController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('voluntario'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_horas_voluntariadas_dto_1.CreateHorasVoluntariadasDto, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], HorasVoluntariadasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('voluntario'),
    (0, roles_decorator_1.Roles)('voluntario'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], HorasVoluntariadasController.prototype, "findAllByVolunteer", null);
__decorate([
    (0, common_1.Get)('proyecto/:idProyecto'),
    (0, roles_decorator_1.Roles)('voluntario'),
    __param(0, (0, common_1.Param)('idProyecto')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], HorasVoluntariadasController.prototype, "findByProject", null);
__decorate([
    (0, common_1.Get)('proyecto/:idProyecto/resumen'),
    (0, roles_decorator_1.Roles)('voluntario'),
    __param(0, (0, common_1.Param)('idProyecto')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], HorasVoluntariadasController.prototype, "getResumenByProject", null);
__decorate([
    (0, common_1.Get)('proyecto/:idProyecto/todas'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Param)('idProyecto')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], HorasVoluntariadasController.prototype, "findAllByProjectForOrganization", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('voluntario', 'organizacion', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_horas_voluntariadas_dto_1.UpdateHorasVoluntariadasDto, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], HorasVoluntariadasController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/verificar'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], HorasVoluntariadasController.prototype, "verificar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('voluntario'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], HorasVoluntariadasController.prototype, "remove", null);
exports.HorasVoluntariadasController = HorasVoluntariadasController = __decorate([
    (0, common_1.Controller)('horas-voluntariadas'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [horas_voluntariadas_service_1.HorasVoluntariadasService])
], HorasVoluntariadasController);
//# sourceMappingURL=horas-voluntariadas.controller.js.map