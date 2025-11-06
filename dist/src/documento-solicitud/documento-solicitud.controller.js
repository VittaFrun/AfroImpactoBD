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
exports.DocumentoSolicitudController = void 0;
const common_1 = require("@nestjs/common");
const documento_solicitud_service_1 = require("./documento-solicitud.service");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
let DocumentoSolicitudController = class DocumentoSolicitudController {
    constructor(service) {
        this.service = service;
    }
    findBySolicitud(id) {
        return this.service.findBySolicitud(id);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    async download(id, res) {
        const documento = await this.service.findOne(id);
        res.send(documento);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.DocumentoSolicitudController = DocumentoSolicitudController;
__decorate([
    (0, common_1.Get)('solicitud/:id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion', 'voluntario'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocumentoSolicitudController.prototype, "findBySolicitud", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion', 'voluntario'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocumentoSolicitudController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion', 'voluntario'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DocumentoSolicitudController.prototype, "download", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocumentoSolicitudController.prototype, "remove", null);
exports.DocumentoSolicitudController = DocumentoSolicitudController = __decorate([
    (0, common_1.Controller)('documento-solicitud'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [documento_solicitud_service_1.DocumentoSolicitudService])
], DocumentoSolicitudController);
//# sourceMappingURL=documento-solicitud.controller.js.map