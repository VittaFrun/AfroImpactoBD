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
exports.MetodoPagoController = void 0;
const common_1 = require("@nestjs/common");
const metodopago_service_1 = require("./metodopago.service");
const create_metodopago_dto_1 = require("./dto/create-metodopago.dto");
const update_metodopago_dto_1 = require("./dto/update-metodopago.dto");
let MetodoPagoController = class MetodoPagoController {
    constructor(metodoPagoService) {
        this.metodoPagoService = metodoPagoService;
    }
    findAll() {
        return this.metodoPagoService.findAll();
    }
    findOne(id) {
        return this.metodoPagoService.findOne(+id);
    }
    create(createMetodoPagoDto) {
        return this.metodoPagoService.create(createMetodoPagoDto);
    }
    update(id, updateMetodoPagoDto) {
        return this.metodoPagoService.update(+id, updateMetodoPagoDto);
    }
    remove(id) {
        return this.metodoPagoService.remove(+id);
    }
};
exports.MetodoPagoController = MetodoPagoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MetodoPagoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MetodoPagoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_metodopago_dto_1.CreateMetodoPagoDto]),
    __metadata("design:returntype", void 0)
], MetodoPagoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_metodopago_dto_1.UpdateMetodoPagoDto]),
    __metadata("design:returntype", void 0)
], MetodoPagoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MetodoPagoController.prototype, "remove", null);
exports.MetodoPagoController = MetodoPagoController = __decorate([
    (0, common_1.Controller)('metodos-pago'),
    __metadata("design:paramtypes", [metodopago_service_1.MetodoPagoService])
], MetodoPagoController);
//# sourceMappingURL=metodopago.controller.js.map