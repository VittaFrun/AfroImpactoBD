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
exports.SolicitudInscripcionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const solicitud_inscripcion_entity_1 = require("./solicitud-inscripcion.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
let SolicitudInscripcionService = class SolicitudInscripcionService {
    constructor(repo, proyectoRepo, voluntarioRepo) {
        this.repo = repo;
        this.proyectoRepo = proyectoRepo;
        this.voluntarioRepo = voluntarioRepo;
    }
    async create(dto) {
        const proyecto = await this.proyectoRepo.findOne({
            where: { id_proyecto: dto.id_proyecto }
        });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${dto.id_proyecto} no encontrado`);
        }
        const voluntario = await this.voluntarioRepo.findOne({
            where: { id_voluntario: dto.id_voluntario }
        });
        if (!voluntario) {
            throw new common_1.NotFoundException(`Voluntario con ID ${dto.id_voluntario} no encontrado`);
        }
        const existingSolicitud = await this.repo.findOne({
            where: {
                id_proyecto: dto.id_proyecto,
                id_voluntario: dto.id_voluntario,
                estado: 'pendiente'
            }
        });
        if (existingSolicitud) {
            throw new common_1.BadRequestException('Ya existe una solicitud pendiente para este proyecto');
        }
        const solicitudAprobada = await this.repo.findOne({
            where: {
                id_proyecto: dto.id_proyecto,
                id_voluntario: dto.id_voluntario,
                estado: 'aprobada'
            }
        });
        if (solicitudAprobada) {
            throw new common_1.BadRequestException('Ya tienes una solicitud aprobada para este proyecto');
        }
        const solicitud = this.repo.create({
            id_proyecto: dto.id_proyecto,
            id_voluntario: dto.id_voluntario,
            estado: 'pendiente',
            motivacion: dto.motivacion || null,
            disponibilidad: dto.disponibilidad || null,
            experiencia_relacionada: dto.experiencia_relacionada || null,
            fecha_solicitud: new Date(),
        });
        return this.repo.save(solicitud);
    }
    async findAll() {
        return this.repo.find({
            relations: ['proyecto', 'voluntario', 'documentos'],
            order: { creado_en: 'DESC' }
        });
    }
    async findByProject(id_proyecto) {
        return this.repo.find({
            where: { id_proyecto },
            relations: ['voluntario', 'voluntario.usuario', 'documentos'],
            order: { creado_en: 'DESC' }
        });
    }
    async findByVolunteer(id_voluntario) {
        return this.repo.find({
            where: { id_voluntario },
            relations: ['proyecto', 'proyecto.organizacion', 'documentos'],
            order: { creado_en: 'DESC' }
        });
    }
    async findOne(id) {
        const solicitud = await this.repo.findOne({
            where: { id_solicitud: id },
            relations: ['proyecto', 'voluntario', 'voluntario.usuario', 'documentos']
        });
        if (!solicitud) {
            throw new common_1.NotFoundException(`Solicitud con ID ${id} no encontrada`);
        }
        return solicitud;
    }
    async update(id, dto) {
        const solicitud = await this.findOne(id);
        if (dto.estado && dto.estado !== solicitud.estado) {
            solicitud.fecha_revision = new Date();
        }
        Object.assign(solicitud, dto);
        return this.repo.save(solicitud);
    }
    async remove(id) {
        const solicitud = await this.findOne(id);
        return this.repo.remove(solicitud);
    }
};
exports.SolicitudInscripcionService = SolicitudInscripcionService;
exports.SolicitudInscripcionService = SolicitudInscripcionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(solicitud_inscripcion_entity_1.SolicitudInscripcion)),
    __param(1, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __param(2, (0, typeorm_1.InjectRepository)(voluntario_entity_1.Voluntario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SolicitudInscripcionService);
//# sourceMappingURL=solicitud-inscripcion.service.js.map