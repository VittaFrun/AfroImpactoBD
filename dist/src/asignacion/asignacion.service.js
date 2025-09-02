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
exports.AsignacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asignacion_entity_1 = require("./asignacion.entity");
const tarea_entity_1 = require("../tarea/tarea.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
let AsignacionService = class AsignacionService {
    constructor(repo, tareaRepo, proyectoRepo, orgRepo, voluntarioRepo) {
        this.repo = repo;
        this.tareaRepo = tareaRepo;
        this.proyectoRepo = proyectoRepo;
        this.orgRepo = orgRepo;
        this.voluntarioRepo = voluntarioRepo;
    }
    async create(dto, user) {
        const tarea = await this.tareaRepo.findOne({ where: { id_tarea: dto.id_tarea }, relations: ['fase'] });
        if (!tarea) {
            throw new common_1.NotFoundException(`Tarea con ID ${dto.id_tarea} no encontrada`);
        }
        await this.checkOrganizacionOwnership(tarea.fase.id_proyecto, user);
        const asignacion = this.repo.create(dto);
        return this.repo.save(asignacion);
    }
    findAllByTarea(idTarea) {
        return this.repo.find({ where: { id_tarea: idTarea } });
    }
    async findTasksByVoluntario(id_usuario) {
        const voluntario = await this.voluntarioRepo.findOne({ where: { id_usuario } });
        if (!voluntario) {
            throw new common_1.NotFoundException('Voluntario no encontrado');
        }
        return this.repo.find({ where: { id_voluntario: voluntario.id_voluntario }, relations: ['tarea'] });
    }
    async remove(id, user) {
        const asignacion = await this.repo.findOne({ where: { id_asignacion: id }, relations: ['tarea', 'tarea.fase'] });
        if (!asignacion) {
            throw new common_1.NotFoundException(`Asignacion con ID ${id} no encontrada`);
        }
        await this.checkOrganizacionOwnership(asignacion.tarea.fase.id_proyecto, user);
        return this.repo.remove(asignacion);
    }
    async checkOrganizacionOwnership(id_proyecto, user) {
        if (user.tipo_usuario === 'admin')
            return;
        const proyecto = await this.proyectoRepo.findOne({ where: { id_proyecto } });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${id_proyecto} no encontrado`);
        }
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (!organizacion || proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso sobre este proyecto.');
        }
    }
};
exports.AsignacionService = AsignacionService;
exports.AsignacionService = AsignacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asignacion_entity_1.Asignacion)),
    __param(1, (0, typeorm_1.InjectRepository)(tarea_entity_1.Tarea)),
    __param(2, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __param(3, (0, typeorm_1.InjectRepository)(organizacion_entity_1.Organizacion)),
    __param(4, (0, typeorm_1.InjectRepository)(voluntario_entity_1.Voluntario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AsignacionService);
//# sourceMappingURL=asignacion.service.js.map