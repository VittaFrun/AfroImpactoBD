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
exports.ProyectoBeneficio = void 0;
const typeorm_1 = require("typeorm");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
let ProyectoBeneficio = class ProyectoBeneficio {
};
exports.ProyectoBeneficio = ProyectoBeneficio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_proyecto_beneficio' }),
    __metadata("design:type", Number)
], ProyectoBeneficio.prototype, "id_proyecto_beneficio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_proyecto', unique: true }),
    __metadata("design:type", Number)
], ProyectoBeneficio.prototype, "id_proyecto", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => proyecto_entity_1.Proyecto, (proyecto) => proyecto.beneficio),
    (0, typeorm_1.JoinColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], ProyectoBeneficio.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['volunteer', 'stipend', 'salary', 'honorarium'],
        default: 'volunteer',
        name: 'tipo_pago'
    }),
    __metadata("design:type", String)
], ProyectoBeneficio.prototype, "tipo_pago", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], ProyectoBeneficio.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['none', 'monthly', 'weekly', 'project'],
        default: 'none'
    }),
    __metadata("design:type", String)
], ProyectoBeneficio.prototype, "frecuencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'descripcion_pago' }),
    __metadata("design:type", String)
], ProyectoBeneficio.prototype, "descripcion_pago", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, name: 'incluye_transporte' }),
    __metadata("design:type", Boolean)
], ProyectoBeneficio.prototype, "incluye_transporte", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, name: 'incluye_alimentacion' }),
    __metadata("design:type", Boolean)
], ProyectoBeneficio.prototype, "incluye_alimentacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, name: 'incluye_materiales' }),
    __metadata("design:type", Boolean)
], ProyectoBeneficio.prototype, "incluye_materiales", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, name: 'incluye_seguro' }),
    __metadata("design:type", Boolean)
], ProyectoBeneficio.prototype, "incluye_seguro", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", Date)
], ProyectoBeneficio.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizado_en' }),
    __metadata("design:type", Date)
], ProyectoBeneficio.prototype, "actualizado_en", void 0);
exports.ProyectoBeneficio = ProyectoBeneficio = __decorate([
    (0, typeorm_1.Entity)({ name: 'proyecto_beneficio' })
], ProyectoBeneficio);
//# sourceMappingURL=proyecto-beneficio.entity.js.map