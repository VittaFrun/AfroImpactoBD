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
let ProyectoService = class ProyectoService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto) {
        const proyecto = this.repo.create(dto);
        return this.repo.save(proyecto);
    }
    findAll() {
        return this.repo.find();
    }
    async findOne(id) {
        const proyecto = await this.repo.findOne({
            where: { id_proyecto: id },
        });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${id} no encontrado`);
        }
        return proyecto;
    }
    async update(id, dto) {
        const proyecto = await this.findOne(id);
        this.repo.merge(proyecto, dto);
        return this.repo.save(proyecto);
    }
    async remove(id) {
        const proyecto = await this.findOne(id);
        return this.repo.remove(proyecto);
    }
};
exports.ProyectoService = ProyectoService;
exports.ProyectoService = ProyectoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProyectoService);
//# sourceMappingURL=proyecto.service.js.map