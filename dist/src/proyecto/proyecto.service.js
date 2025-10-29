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
const fase_entity_1 = require("../fase/fase.entity");
const tarea_entity_1 = require("../tarea/tarea.entity");
let ProyectoService = class ProyectoService {
    constructor(repo, orgRepo, faseRepo, tareaRepo) {
        this.repo = repo;
        this.orgRepo = orgRepo;
        this.faseRepo = faseRepo;
        this.tareaRepo = tareaRepo;
    }
    async create(dto, user) {
        if (!dto.nombre || dto.nombre.trim() === '') {
            throw new Error('El nombre del proyecto es requerido');
        }
        if (!dto.descripcion || dto.descripcion.trim() === '') {
            throw new Error('La descripción del proyecto es requerida');
        }
        if (!dto.objetivo || dto.objetivo.trim() === '') {
            throw new Error('El objetivo del proyecto es requerido');
        }
        if (!dto.ubicacion || dto.ubicacion.trim() === '') {
            throw new Error('La ubicación del proyecto es requerida');
        }
        if (!dto.fecha_inicio) {
            throw new Error('La fecha de inicio es requerida');
        }
        if (!dto.fecha_fin) {
            throw new Error('La fecha de fin es requerida');
        }
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (!organizacion) {
            throw new common_1.NotFoundException('Organizacion no encontrada para el usuario');
        }
        const proyecto = this.repo.create(Object.assign(Object.assign({}, dto), { id_organizacion: organizacion.id_organizacion, nombre: dto.nombre.trim(), descripcion: dto.descripcion.trim(), objetivo: dto.objetivo.trim(), ubicacion: dto.ubicacion.trim() }));
        return this.repo.save(proyecto);
    }
    async findAll(user) {
        if (user.tipo_usuario === 'admin') {
            return this.repo.find({
                relations: ['organizacion', 'estado', 'fases', 'fases.tareas']
            });
        }
        if (user.tipo_usuario === 'organizacion') {
            const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
            if (!organizacion) {
                return [];
            }
            return this.repo.find({
                where: { id_organizacion: organizacion.id_organizacion },
                relations: ['organizacion', 'estado', 'fases', 'fases.tareas'],
            });
        }
        return [];
    }
    async findOne(id) {
        const proyecto = await this.repo.findOne({
            where: { id_proyecto: id },
            relations: ['organizacion', 'estado', 'fases', 'fases.tareas'],
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
    async addFase(proyectoId, dto, user) {
        const proyecto = await this.findOne(proyectoId);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para agregar fases a este proyecto.');
        }
        const fase = this.faseRepo.create(Object.assign(Object.assign({}, dto), { id_proyecto: proyectoId }));
        const savedFase = await this.faseRepo.save(fase);
        return this.findOne(proyectoId);
    }
    async updateFase(proyectoId, faseId, dto, user) {
        const proyecto = await this.findOne(proyectoId);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para actualizar fases de este proyecto.');
        }
        const fase = await this.faseRepo.findOne({
            where: { id_fase: faseId, id_proyecto: proyectoId },
        });
        if (!fase) {
            throw new common_1.NotFoundException(`Fase con ID ${faseId} no encontrada en el proyecto ${proyectoId}`);
        }
        this.faseRepo.merge(fase, dto);
        await this.faseRepo.save(fase);
        return this.findOne(proyectoId);
    }
    async removeFase(proyectoId, faseId, user) {
        const proyecto = await this.findOne(proyectoId);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para eliminar fases de este proyecto.');
        }
        const fase = await this.faseRepo.findOne({
            where: { id_fase: faseId, id_proyecto: proyectoId },
        });
        if (!fase) {
            throw new common_1.NotFoundException(`Fase con ID ${faseId} no encontrada en el proyecto ${proyectoId}`);
        }
        await this.faseRepo.remove(fase);
        return this.findOne(proyectoId);
    }
    async addTarea(proyectoId, dto, user) {
        const proyecto = await this.findOne(proyectoId);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para agregar tareas a este proyecto.');
        }
        const fase = await this.faseRepo.findOne({
            where: { id_fase: dto.id_fase, id_proyecto: proyectoId },
        });
        if (!fase) {
            throw new common_1.NotFoundException(`Fase con ID ${dto.id_fase} no encontrada en el proyecto ${proyectoId}`);
        }
        const tarea = this.tareaRepo.create(dto);
        await this.tareaRepo.save(tarea);
        return this.findOne(proyectoId);
    }
    async updateTarea(proyectoId, tareaId, dto, user) {
        const proyecto = await this.findOne(proyectoId);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para actualizar tareas de este proyecto.');
        }
        const tarea = await this.tareaRepo.findOne({
            where: { id_tarea: tareaId },
            relations: ['fase'],
        });
        if (!tarea || tarea.fase.id_proyecto !== proyectoId) {
            throw new common_1.NotFoundException(`Tarea con ID ${tareaId} no encontrada en el proyecto ${proyectoId}`);
        }
        this.tareaRepo.merge(tarea, dto);
        await this.tareaRepo.save(tarea);
        return this.findOne(proyectoId);
    }
    async removeTarea(proyectoId, tareaId, user) {
        const proyecto = await this.findOne(proyectoId);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para eliminar tareas de este proyecto.');
        }
        const tarea = await this.tareaRepo.findOne({
            where: { id_tarea: tareaId },
            relations: ['fase'],
        });
        if (!tarea || tarea.fase.id_proyecto !== proyectoId) {
            throw new common_1.NotFoundException(`Tarea con ID ${tareaId} no encontrada en el proyecto ${proyectoId}`);
        }
        await this.tareaRepo.remove(tarea);
        return this.findOne(proyectoId);
    }
};
exports.ProyectoService = ProyectoService;
exports.ProyectoService = ProyectoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __param(1, (0, typeorm_1.InjectRepository)(organizacion_entity_1.Organizacion)),
    __param(2, (0, typeorm_1.InjectRepository)(fase_entity_1.Fase)),
    __param(3, (0, typeorm_1.InjectRepository)(tarea_entity_1.Tarea)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProyectoService);
//# sourceMappingURL=proyecto.service.js.map