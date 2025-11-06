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
exports.FormularioInscripcionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const formulario_inscripcion_entity_1 = require("./formulario-inscripcion.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
let FormularioInscripcionService = class FormularioInscripcionService {
    constructor(repo, proyectoRepo) {
        this.repo = repo;
        this.proyectoRepo = proyectoRepo;
    }
    async create(dto) {
        if (!dto.id_proyecto && !dto.id_organizacion) {
            throw new Error('Debe especificar id_proyecto o id_organizacion');
        }
        const campo = this.repo.create({
            id_proyecto: dto.id_proyecto || null,
            id_organizacion: dto.id_organizacion || null,
            nombre_campo: dto.nombre_campo,
            tipo_campo: dto.tipo_campo,
            etiqueta: dto.etiqueta,
            placeholder: dto.placeholder || null,
            requerido: dto.requerido || false,
            opciones: dto.opciones || null,
            orden: dto.orden || 0,
            activo: dto.activo !== undefined ? dto.activo : true,
        });
        return this.repo.save(campo);
    }
    async findAll() {
        return this.repo.find({
            order: { orden: 'ASC', creado_en: 'ASC' }
        });
    }
    async findByProject(id_proyecto) {
        return this.repo.find({
            where: { id_proyecto, activo: true },
            order: { orden: 'ASC' }
        });
    }
    async findByOrganization(id_organizacion) {
        return this.repo.find({
            where: { id_organizacion, activo: true },
            order: { orden: 'ASC' }
        });
    }
    async findActiveByProject(id_proyecto) {
        const proyecto = await this.proyectoRepo.findOne({
            where: { id_proyecto },
            select: ['id_organizacion']
        });
        if (!proyecto) {
            return [];
        }
        const camposProyecto = await this.repo.find({
            where: { id_proyecto, activo: true },
            order: { orden: 'ASC' }
        });
        const camposOrganizacion = await this.repo.find({
            where: {
                id_organizacion: proyecto.id_organizacion,
                id_proyecto: null,
                activo: true
            },
            order: { orden: 'ASC' }
        });
        const todosCampos = [...camposProyecto, ...camposOrganizacion];
        return todosCampos.sort((a, b) => a.orden - b.orden);
    }
    async findOne(id) {
        const campo = await this.repo.findOne({
            where: { id_formulario: id }
        });
        if (!campo) {
            throw new common_1.NotFoundException(`Campo de formulario con ID ${id} no encontrado`);
        }
        return campo;
    }
    async update(id, dto) {
        const campo = await this.findOne(id);
        Object.assign(campo, dto);
        return this.repo.save(campo);
    }
    async remove(id) {
        const campo = await this.findOne(id);
        return this.repo.remove(campo);
    }
    async reorder(id_proyecto, ordenes) {
        const updates = ordenes.map(({ id_formulario, orden }) => this.repo.update(id_formulario, { orden }));
        await Promise.all(updates);
        return this.findByProject(id_proyecto);
    }
};
exports.FormularioInscripcionService = FormularioInscripcionService;
exports.FormularioInscripcionService = FormularioInscripcionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(formulario_inscripcion_entity_1.FormularioInscripcion)),
    __param(1, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FormularioInscripcionService);
//# sourceMappingURL=formulario-inscripcion.service.js.map