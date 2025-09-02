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
exports.DonacionController = void 0;
const common_1 = require("@nestjs/common");
const donacion_service_1 = require("./donacion.service");
const create_donacion_dto_1 = require("./create-donacion.dto");
const update_donacion_dto_1 = require("./update-donacion.dto");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const get_user_decorator_1 = require("../common/decorators/get-user.decorator");
const user_entity_1 = require("../users/user.entity");
let DonacionController = class DonacionController {
    constructor(service) {
        this.service = service;
    }
    create(dto, user) {
        return this.service.create(dto, user);
    }
    findAll() {
        return this.service.findAll();
    }
    findAllByOrganizacion(id, user) {
        return this.service.findAllByOrganizacion(+id, user);
    }
    findOne(id, user) {
        return this.service.findOne(+id, user);
    }
    update(id, dto, user) {
        return this.service.update(+id, dto, user);
    }
    remove(id, user) {
        return this.service.remove(+id, user);
    }
};
exports.DonacionController = DonacionController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_donacion_dto_1.CreateDonacionDto, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], DonacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DonacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('organizacion/:id'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], DonacionController.prototype, "findAllByOrganizacion", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], DonacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('organizacion', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_donacion_dto_1.UpdateDonacionDto, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], DonacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], DonacionController.prototype, "remove", null);
exports.DonacionController = DonacionController = __decorate([
    (0, common_1.Controller)('donacion'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [donacion_service_1.DonacionService])
], DonacionController);
//# sourceMappingURL=donacion.controller.js.map