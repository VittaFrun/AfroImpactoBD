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
exports.TareaController = void 0;
const common_1 = require("@nestjs/common");
const tarea_service_1 = require("./tarea.service");
const create_tarea_dto_1 = require("./create-tarea.dto");
const update_tarea_dto_1 = require("./update-tarea.dto");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const get_user_decorator_1 = require("../common/decorators/get-user.decorator");
const user_entity_1 = require("../users/user.entity");
let TareaController = class TareaController {
    constructor(service) {
        this.service = service;
    }
    create(dto, user) {
        return this.service.create(dto, user);
    }
    findAllByProyecto(idProyecto) {
        return this.service.findAllByProyecto(+idProyecto);
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    update(id, dto, user) {
        return this.service.update(+id, dto, user);
    }
    remove(id, user) {
        return this.service.remove(+id, user);
    }
};
exports.TareaController = TareaController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tarea_dto_1.CreateTareaDto, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('proyecto/:idProyecto'),
    (0, roles_decorator_1.Roles)('organizacion', 'voluntario', 'admin'),
    __param(0, (0, common_1.Param)('idProyecto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "findAllByProyecto", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('organizacion', 'voluntario', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin', 'voluntario'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tarea_dto_1.UpdateTareaDto, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "remove", null);
exports.TareaController = TareaController = __decorate([
    (0, common_1.Controller)('tarea'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [tarea_service_1.TareaService])
], TareaController);
//# sourceMappingURL=tarea.controller.js.map