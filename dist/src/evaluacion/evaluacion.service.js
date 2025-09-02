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
exports.EvaluacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const evaluacion_entity_1 = require("./evaluacion.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
let EvaluacionService = class EvaluacionService {
    constructor(repo, proyectoRepo, orgRepo, voluntarioRepo) {
        this.repo = repo;
        this.proyectoRepo = proyectoRepo;
        this.orgRepo = orgRepo;
        this.voluntarioRepo = voluntarioRepo;
    }
    async create(dto, user) {
        await this.checkOrganizacionOwnership(dto.id_proyecto, user);
        const evaluacion = this.repo.create(dto);
        return this.repo.save(evaluacion);
    }
    findAllByProyecto(idProyecto) {
        return this.repo.find({ where: { id_proyecto: idProyecto } });
    }
    async findAllByVoluntario(idVoluntario, user) {
        if (user.tipo_usuario === 'voluntario') {
            const voluntario = await this.voluntarioRepo.findOne({ where: { id_usuario: user.id_usuario } });
            if (!voluntario || voluntario.id_voluntario !== idVoluntario) {
                throw new common_1.ForbiddenException('No tienes permiso para ver estas evaluaciones.');
            }
        }
        return this.repo.find({ where: { id_voluntario: idVoluntario } });
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
exports.EvaluacionService = EvaluacionService;
exports.EvaluacionService = EvaluacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(evaluacion_entity_1.Evaluacion)),
    __param(1, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __param(2, (0, typeorm_1.InjectRepository)(organizacion_entity_1.Organizacion)),
    __param(3, (0, typeorm_1.InjectRepository)(voluntario_entity_1.Voluntario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EvaluacionService);
//# sourceMappingURL=evaluacion.service.js.map