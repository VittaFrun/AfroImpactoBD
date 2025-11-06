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
exports.SolicitudInscripcionController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const solicitud_inscripcion_service_1 = require("./solicitud-inscripcion.service");
const create_solicitud_inscripcion_dto_1 = require("./create-solicitud-inscripcion.dto");
const update_solicitud_inscripcion_dto_1 = require("./update-solicitud-inscripcion.dto");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const get_user_decorator_1 = require("../common/decorators/get-user.decorator");
const user_entity_1 = require("../users/user.entity");
const documento_solicitud_service_1 = require("../documento-solicitud/documento-solicitud.service");
const voluntario_service_1 = require("../voluntario/voluntario.service");
let SolicitudInscripcionController = class SolicitudInscripcionController {
    constructor(service, documentoService, voluntarioService) {
        this.service = service;
        this.documentoService = documentoService;
        this.voluntarioService = voluntarioService;
    }
    async create(dto, files, user) {
        const voluntario = await this.voluntarioService.findByUserId(user.id_usuario);
        const solicitudDto = Object.assign(Object.assign({}, dto), { id_voluntario: voluntario.id_voluntario });
        const solicitud = await this.service.create(solicitudDto);
        if (files && files.length > 0) {
            for (const file of files) {
                await this.documentoService.create(solicitud.id_solicitud, file, file.fieldname || 'general');
            }
        }
        return solicitud;
    }
    findAll() {
        return this.service.findAll();
    }
    findByProject(id) {
        return this.service.findByProject(id);
    }
    findByVolunteer(id) {
        return this.service.findByVolunteer(id);
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
};
exports.SolicitudInscripcionController = SolicitudInscripcionController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('voluntario'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('documentos', 10)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_solicitud_inscripcion_dto_1.CreateSolicitudInscripcionDto, Array, user_entity_1.Usuario]),
    __metadata("design:returntype", Promise)
], SolicitudInscripcionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitudInscripcionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('proyecto/:id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitudInscripcionController.prototype, "findByProject", null);
__decorate([
    (0, common_1.Get)('voluntario/:id'),
    (0, roles_decorator_1.Roles)('voluntario', 'admin'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitudInscripcionController.prototype, "findByVolunteer", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion', 'voluntario'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitudInscripcionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_solicitud_inscripcion_dto_1.UpdateSolicitudInscripcionDto]),
    __metadata("design:returntype", void 0)
], SolicitudInscripcionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('admin', 'organizacion'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitudInscripcionController.prototype, "remove", null);
exports.SolicitudInscripcionController = SolicitudInscripcionController = __decorate([
    (0, common_1.Controller)('solicitud-inscripcion'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [solicitud_inscripcion_service_1.SolicitudInscripcionService,
        documento_solicitud_service_1.DocumentoSolicitudService,
        voluntario_service_1.VoluntarioService])
], SolicitudInscripcionController);
//# sourceMappingURL=solicitud-inscripcion.controller.js.map