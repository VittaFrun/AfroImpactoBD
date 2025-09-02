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
exports.ProyectoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const proyecto_entity_1 = require("./proyecto.entity");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
let ProyectoService = class ProyectoService {
    constructor(repo, orgRepo) {
        this.repo = repo;
        this.orgRepo = orgRepo;
    }
    async create(dto, user) {
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (!organizacion) {
            throw new common_1.NotFoundException('Organizacion no encontrada para el usuario');
        }
        const proyecto = this.repo.create(Object.assign(Object.assign({}, dto), { id_organizacion: organizacion.id_organizacion }));
        return this.repo.save(proyecto);
    }
    async findAll(user) {
        if (user.tipo_usuario === 'admin') {
            return this.repo.find({ relations: ['organizacion'] });
        }
        if (user.tipo_usuario === 'organizacion') {
            const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
            if (!organizacion) {
                return [];
            }
            return this.repo.find({
                where: { id_organizacion: organizacion.id_organizacion },
                relations: ['organizacion'],
            });
        }
        return [];
    }
    async findOne(id) {
        const proyecto = await this.repo.findOne({
            where: { id_proyecto: id },
            relations: ['organizacion'],
        });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${id} no encontrado`);
        }
        return proyecto;
    }
    async update(id, dto, user) {
        const proyecto = await this.findOne(id);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para actualizar este proyecto.');
        }
        this.repo.merge(proyecto, dto);
        return this.repo.save(proyecto);
    }
    async remove(id, user) {
        const proyecto = await this.findOne(id);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para eliminar este proyecto.');
        }
        return this.repo.remove(proyecto);
    }
};
exports.ProyectoService = ProyectoService;
exports.ProyectoService = ProyectoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __param(1, (0, typeorm_1.InjectRepository)(organizacion_entity_1.Organizacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProyectoService);
//# sourceMappingURL=proyecto.service.js.map