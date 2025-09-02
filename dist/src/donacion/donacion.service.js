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
exports.DonacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const donacion_entity_1 = require("./donacion.entity");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
let DonacionService = class DonacionService {
    constructor(repo, orgRepo) {
        this.repo = repo;
        this.orgRepo = orgRepo;
    }
    async create(dto, user) {
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (!organizacion) {
            throw new common_1.NotFoundException('Organizacion no encontrada para el usuario');
        }
        const donacion = this.repo.create(Object.assign(Object.assign({}, dto), { id_organizacion: organizacion.id_organizacion }));
        return this.repo.save(donacion);
    }
    findAll() {
        return this.repo.find();
    }
    async findAllByOrganizacion(id_organizacion, user) {
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && organizacion.id_organizacion !== id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para ver estas donaciones.');
        }
        return this.repo.find({ where: { id_organizacion } });
    }
    async findOne(id, user) {
        const donacion = await this.repo.findOne({ where: { id_donacion: id } });
        if (!donacion) {
            throw new common_1.NotFoundException(`Donacion con ID ${id} no encontrada`);
        }
        await this.checkOrganizacionOwnership(donacion, user);
        return donacion;
    }
    async update(id, dto, user) {
        const donacion = await this.findOne(id, user);
        this.repo.merge(donacion, dto);
        return this.repo.save(donacion);
    }
    async remove(id, user) {
        if (user.tipo_usuario !== 'admin') {
            throw new common_1.ForbiddenException('No tienes permiso para eliminar donaciones.');
        }
        const donacion = await this.repo.findOne({ where: { id_donacion: id } });
        if (!donacion) {
            throw new common_1.NotFoundException(`Donacion con ID ${id} no encontrada`);
        }
        return this.repo.remove(donacion);
    }
    async checkOrganizacionOwnership(donacion, user) {
        if (user.tipo_usuario === 'admin')
            return;
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (!organizacion || donacion.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso sobre esta donacion.');
        }
    }
};
exports.DonacionService = DonacionService;
exports.DonacionService = DonacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(donacion_entity_1.Donacion)),
    __param(1, (0, typeorm_1.InjectRepository)(organizacion_entity_1.Organizacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DonacionService);
//# sourceMappingURL=donacion.service.js.map