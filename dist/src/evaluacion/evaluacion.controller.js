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
exports.EvaluacionController = void 0;
const common_1 = require("@nestjs/common");
const evaluacion_service_1 = require("./evaluacion.service");
const create_evaluacion_dto_1 = require("./dto/create-evaluacion.dto");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const get_user_decorator_1 = require("../common/decorators/get-user.decorator");
const user_entity_1 = require("../users/user.entity");
let EvaluacionController = class EvaluacionController {
    constructor(service) {
        this.service = service;
    }
    create(dto, user) {
        return this.service.create(dto, user);
    }
    findAllByProyecto(idProyecto) {
        return this.service.findAllByProyecto(+idProyecto);
    }
    findAllByVoluntario(idVoluntario, user) {
        return this.service.findAllByVoluntario(+idVoluntario, user);
    }
};
exports.EvaluacionController = EvaluacionController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evaluacion_dto_1.CreateEvaluacionDto, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('proyecto/:idProyecto'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Param)('idProyecto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "findAllByProyecto", null);
__decorate([
    (0, common_1.Get)('voluntario/:idVoluntario'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin', 'voluntario'),
    __param(0, (0, common_1.Param)('idVoluntario')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], EvaluacionController.prototype, "findAllByVoluntario", null);
exports.EvaluacionController = EvaluacionController = __decorate([
    (0, common_1.Controller)('evaluacion'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [evaluacion_service_1.EvaluacionService])
], EvaluacionController);
//# sourceMappingURL=evaluacion.controller.js.map