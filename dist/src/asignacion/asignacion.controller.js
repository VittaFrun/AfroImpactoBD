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
exports.AsignacionController = void 0;
const common_1 = require("@nestjs/common");
const asignacion_service_1 = require("./asignacion.service");
const create_asignacion_dto_1 = require("./create-asignacion.dto");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const get_user_decorator_1 = require("../common/decorators/get-user.decorator");
const user_entity_1 = require("../users/user.entity");
let AsignacionController = class AsignacionController {
    constructor(service) {
        this.service = service;
    }
    create(dto, user) {
        return this.service.create(dto, user);
    }
    findAllByTarea(idTarea) {
        return this.service.findAllByTarea(+idTarea);
    }
    findMyTasks(user) {
        return this.service.findTasksByVoluntario(user.id_usuario);
    }
    findAsignacionesByProyecto(idProyecto, user) {
        return this.service.findAsignacionesByProyecto(+idProyecto, user.id_usuario);
    }
    remove(id, user) {
        return this.service.remove(+id, user);
    }
};
exports.AsignacionController = AsignacionController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asignacion_dto_1.CreateAsignacionDto, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('tarea/:idTarea'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Param)('idTarea')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "findAllByTarea", null);
__decorate([
    (0, common_1.Get)('voluntario/mis-tareas'),
    (0, roles_decorator_1.Roles)('voluntario'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "findMyTasks", null);
__decorate([
    (0, common_1.Get)('voluntario/proyecto/:idProyecto'),
    (0, roles_decorator_1.Roles)('voluntario'),
    __param(0, (0, common_1.Param)('idProyecto')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "findAsignacionesByProyecto", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "remove", null);
exports.AsignacionController = AsignacionController = __decorate([
    (0, common_1.Controller)('asignacion'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [asignacion_service_1.AsignacionService])
], AsignacionController);
//# sourceMappingURL=asignacion.controller.js.map