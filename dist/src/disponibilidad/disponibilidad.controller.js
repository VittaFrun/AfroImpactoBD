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
exports.DisponibilidadController = void 0;
const common_1 = require("@nestjs/common");
const disponibilidad_service_1 = require("./disponibilidad.service");
const create_disponibilidad_dto_1 = require("./dto/create-disponibilidad.dto");
const update_disponibilidad_dto_1 = require("./dto/update-disponibilidad.dto");
let DisponibilidadController = class DisponibilidadController {
    constructor(disponibilidadService) {
        this.disponibilidadService = disponibilidadService;
    }
    findAll() {
        return this.disponibilidadService.findAll();
    }
    findOne(id) {
        return this.disponibilidadService.findOne(+id);
    }
    create(createDisponibilidadDto) {
        return this.disponibilidadService.create(createDisponibilidadDto);
    }
    update(id, updateDisponibilidadDto) {
        return this.disponibilidadService.update(+id, updateDisponibilidadDto);
    }
    remove(id) {
        return this.disponibilidadService.remove(+id);
    }
};
exports.DisponibilidadController = DisponibilidadController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_disponibilidad_dto_1.CreateDisponibilidadDto]),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_disponibilidad_dto_1.UpdateDisponibilidadDto]),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "remove", null);
exports.DisponibilidadController = DisponibilidadController = __decorate([
    (0, common_1.Controller)('disponibilidades'),
    __metadata("design:paramtypes", [disponibilidad_service_1.DisponibilidadService])
], DisponibilidadController);
//# sourceMappingURL=disponibilidad.controller.js.map