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
exports.ArchivoController = void 0;
const common_1 = require("@nestjs/common");
const archivo_service_1 = require("./archivo.service");
const create_archivo_dto_1 = require("./dto/create-archivo.dto");
const update_archivo_dto_1 = require("./dto/update-archivo.dto");
let ArchivoController = class ArchivoController {
    constructor(archivoService) {
        this.archivoService = archivoService;
    }
    findAll() {
        return this.archivoService.findAll();
    }
    findOne(id) {
        return this.archivoService.findOne(+id);
    }
    create(createArchivoDto) {
        return this.archivoService.create(createArchivoDto);
    }
    update(id, updateArchivoDto) {
        return this.archivoService.update(+id, updateArchivoDto);
    }
    remove(id) {
        return this.archivoService.remove(+id);
    }
};
exports.ArchivoController = ArchivoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_archivo_dto_1.CreateArchivoDto]),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_archivo_dto_1.UpdateArchivoDto]),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "remove", null);
exports.ArchivoController = ArchivoController = __decorate([
    (0, common_1.Controller)('archivos'),
    __metadata("design:paramtypes", [archivo_service_1.ArchivoService])
], ArchivoController);
//# sourceMappingURL=archivo.controller.js.map