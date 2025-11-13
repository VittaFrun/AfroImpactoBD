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
const rol_entity_1 = require("../rol/rol.entity");
let AsignacionService = class AsignacionService {
    constructor(repo, tareaRepo, proyectoRepo, orgRepo, voluntarioRepo, rolRepo) {
        this.repo = repo;
        this.tareaRepo = tareaRepo;
        this.proyectoRepo = proyectoRepo;
        this.orgRepo = orgRepo;
        this.voluntarioRepo = voluntarioRepo;
        this.rolRepo = rolRepo;
    }
    async create(dto, user) {
        const tarea = await this.tareaRepo.findOne({
            where: { id_tarea: dto.id_tarea },
            relations: ['fase', 'fase.proyecto']
        });
        if (!tarea) {
            throw new common_1.NotFoundException(`Tarea con ID ${dto.id_tarea} no encontrada`);
        }
        const proyecto = await this.proyectoRepo.findOne({
            where: { id_proyecto: tarea.fase.id_proyecto },
            relations: ['organizacion']
        });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto no encontrado`);
        }
        await this.checkOrganizacionOwnership(proyecto.id_proyecto, user);
        await this.validateRolForProject(dto.id_rol, proyecto.id_proyecto);
        const asignacion = this.repo.create({
            id_tarea: dto.id_tarea,
            id_voluntario: dto.id_voluntario,
            id_rol: dto.id_rol
        });
        const saved = await this.repo.save(asignacion);
        return this.repo.findOne({
            where: { id_asignacion: saved.id_asignacion },
            relations: ['rol', 'voluntario', 'tarea']
        });
    }
    async validateRolForProject(id_rol, id_proyecto) {
        const rol = await this.rolRepo.findOne({ where: { id_rol } });
        if (!rol) {
            throw new common_1.NotFoundException(`Rol con ID ${id_rol} no encontrado`);
        }
        if (!rol.activo) {
            throw new common_1.BadRequestException('El rol no está activo');
        }
        const proyecto = await this.proyectoRepo.findOne({
            where: { id_proyecto },
            relations: ['organizacion']
        });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${id_proyecto} no encontrado`);
        }
        const isValid = rol.tipo_rol === 'sistema' ||
            (rol.tipo_rol === 'organizacion' && rol.id_organizacion === proyecto.id_organizacion) ||
            (rol.tipo_rol === 'proyecto' && rol.id_proyecto === id_proyecto);
        if (!isValid) {
            throw new common_1.BadRequestException('El rol seleccionado no está disponible para este proyecto');
        }
        return true;
    }
    findAllByTarea(idTarea) {
        return this.repo.find({
            where: { id_tarea: idTarea },
            relations: ['rol', 'voluntario', 'tarea']
        });
    }
    async findTasksByVoluntario(id_usuario) {
        const voluntario = await this.voluntarioRepo.findOne({ where: { id_usuario } });
        if (!voluntario) {
            throw new common_1.NotFoundException('Voluntario no encontrado');
        }
        return this.repo.find({
            where: { id_voluntario: voluntario.id_voluntario },
            relations: ['tarea', 'rol']
        });
    }
    async findAsignacionesByProyecto(id_proyecto, id_usuario) {
        const voluntario = await this.voluntarioRepo.findOne({ where: { id_usuario } });
        if (!voluntario) {
            throw new common_1.NotFoundException('Voluntario no encontrado');
        }
        const asignaciones = await this.repo.find({
            where: { id_voluntario: voluntario.id_voluntario },
            relations: ['tarea', 'tarea.fase', 'tarea.estado', 'rol']
        });
        const asignacionesProyecto = asignaciones.filter(a => { var _a, _b; return ((_b = (_a = a.tarea) === null || _a === void 0 ? void 0 : _a.fase) === null || _b === void 0 ? void 0 : _b.id_proyecto) === id_proyecto; });
        return asignacionesProyecto;
    }
    async remove(id, user) {
        const asignacion = await this.repo.findOne({
            where: { id_asignacion: id },
            relations: ['tarea', 'tarea.fase', 'rol']
        });
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
    __param(5, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AsignacionService);
//# sourceMappingURL=asignacion.service.js.map