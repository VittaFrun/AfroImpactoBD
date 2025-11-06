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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archivo = void 0;
const typeorm_1 = require("typeorm");
let Archivo = class Archivo {
};
exports.Archivo = Archivo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_archivo' }),
    __metadata("design:type", Number)
], Archivo.prototype, "id_archivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Archivo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Archivo.prototype, "ruta", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Archivo.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_referencia' }),
    __metadata("design:type", Number)
], Archivo.prototype, "id_referencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, name: 'tipo_referencia' }),
    __metadata("design:type", String)
], Archivo.prototype, "tipo_referencia", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], Archivo.prototype, "creado_en", void 0);
exports.Archivo = Archivo = __decorate([
    (0, typeorm_1.Entity)({ name: 'archivo' })
], Archivo);
//# sourceMappingURL=archivo.entity.js.map