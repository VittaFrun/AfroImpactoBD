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
exports.ProyectoBeneficioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const proyecto_beneficio_entity_1 = require("./proyecto-beneficio.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
let ProyectoBeneficioService = class ProyectoBeneficioService {
    constructor(repo, proyectoRepo) {
        this.repo = repo;
        this.proyectoRepo = proyectoRepo;
    }
    async create(dto) {
        const proyecto = await this.proyectoRepo.findOne({
            where: { id_proyecto: dto.id_proyecto }
        });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${dto.id_proyecto} no encontrado`);
        }
        const existingBeneficio = await this.repo.findOne({
            where: { id_proyecto: dto.id_proyecto }
        });
        if (existingBeneficio) {
            throw new Error('Este proyecto ya tiene un registro de beneficios. Use el método de actualización.');
        }
        const beneficio = this.repo.create({
            id_proyecto: dto.id_proyecto,
            tipo_pago: dto.tipo_pago || 'volunteer',
            monto: dto.monto || 0,
            frecuencia: dto.frecuencia || 'none',
            descripcion_pago: dto.descripcion_pago || null,
            incluye_transporte: dto.incluye_transporte || false,
            incluye_alimentacion: dto.incluye_alimentacion || false,
            incluye_materiales: dto.incluye_materiales || false,
            incluye_seguro: dto.incluye_seguro || false,
        });
        return this.repo.save(beneficio);
    }
    async findOne(id_proyecto) {
        const beneficio = await this.repo.findOne({
            where: { id_proyecto },
            relations: ['proyecto']
        });
        if (!beneficio) {
            return null;
        }
        return beneficio;
    }
    async update(id_proyecto, dto) {
        const beneficio = await this.repo.findOne({
            where: { id_proyecto }
        });
        if (!beneficio) {
            throw new common_1.NotFoundException(`Beneficio para proyecto con ID ${id_proyecto} no encontrado`);
        }
        Object.assign(beneficio, dto);
        return this.repo.save(beneficio);
    }
    async remove(id_proyecto) {
        const beneficio = await this.repo.findOne({
            where: { id_proyecto }
        });
        if (!beneficio) {
            throw new common_1.NotFoundException(`Beneficio para proyecto con ID ${id_proyecto} no encontrado`);
        }
        return this.repo.remove(beneficio);
    }
};
exports.ProyectoBeneficioService = ProyectoBeneficioService;
exports.ProyectoBeneficioService = ProyectoBeneficioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(proyecto_beneficio_entity_1.ProyectoBeneficio)),
    __param(1, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProyectoBeneficioService);
//# sourceMappingURL=proyecto-beneficio.service.js.map