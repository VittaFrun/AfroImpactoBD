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
exports.RolService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rol_entity_1 = require("./rol.entity");
const organizacion_entity_1 = require("../organizacion/organizacion.entity");
const proyecto_entity_1 = require("../proyecto/proyecto.entity");
const asignacion_entity_1 = require("../asignacion/asignacion.entity");
let RolService = class RolService {
    constructor(repo, orgRepo, proyectoRepo, asignacionRepo) {
        this.repo = repo;
        this.orgRepo = orgRepo;
        this.proyectoRepo = proyectoRepo;
        this.asignacionRepo = asignacionRepo;
    }
    async create(dto, user) {
        var _a;
        if (!dto.nombre || !dto.nombre.trim()) {
            throw new common_1.BadRequestException('El nombre del rol es requerido');
        }
        this.validateTipoRol(dto);
        await this.validatePermissions(dto, user);
        const existingRol = await this.findExistingRol(dto);
        if (existingRol) {
            throw new common_1.ConflictException(`Ya existe un rol con el nombre "${dto.nombre.trim()}" en este contexto`);
        }
        const rol = this.repo.create({
            nombre: dto.nombre.trim(),
            descripcion: ((_a = dto.descripcion) === null || _a === void 0 ? void 0 : _a.trim()) || '',
            tipo_rol: dto.tipo_rol,
            id_organizacion: dto.tipo_rol === 'organizacion' ? dto.id_organizacion : null,
            id_proyecto: dto.tipo_rol === 'proyecto' ? dto.id_proyecto : null,
            activo: dto.activo !== undefined ? dto.activo : true,
            creado_por: user.id_usuario,
        });
        return this.repo.save(rol);
    }
    async findAll(filters) {
        const where = {};
        if (filters === null || filters === void 0 ? void 0 : filters.tipo_rol) {
            where.tipo_rol = filters.tipo_rol;
        }
        if (filters === null || filters === void 0 ? void 0 : filters.id_organizacion) {
            where.id_organizacion = filters.id_organizacion;
        }
        if (filters === null || filters === void 0 ? void 0 : filters.id_proyecto) {
            where.id_proyecto = filters.id_proyecto;
        }
        return this.repo.find({
            where,
            order: { nombre: 'ASC' },
            relations: ['organizacion', 'proyecto', 'creador']
        });
    }
    async findSystemRoles() {
        return this.repo.find({
            where: { tipo_rol: 'sistema', activo: true },
            order: { nombre: 'ASC' }
        });
    }
    async findByOrganization(id_organizacion) {
        return this.repo.find({
            where: [
                { tipo_rol: 'sistema', activo: true },
                { tipo_rol: 'organizacion', id_organizacion, activo: true }
            ],
            order: { tipo_rol: 'ASC', nombre: 'ASC' },
            relations: ['organizacion']
        });
    }
    async findByProject(id_proyecto) {
        const proyecto = await this.proyectoRepo.findOne({
            where: { id_proyecto },
            relations: ['organizacion']
        });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${id_proyecto} no encontrado`);
        }
        return this.repo.find({
            where: [
                { tipo_rol: 'sistema', activo: true },
                { tipo_rol: 'organizacion', id_organizacion: proyecto.id_organizacion, activo: true },
                { tipo_rol: 'proyecto', id_proyecto, activo: true }
            ],
            order: { tipo_rol: 'ASC', nombre: 'ASC' },
            relations: ['organizacion', 'proyecto']
        });
    }
    async findOne(id) {
        const rol = await this.repo.findOne({
            where: { id_rol: id },
            relations: ['organizacion', 'proyecto', 'creador']
        });
        if (!rol) {
            throw new common_1.NotFoundException(`Rol con ID ${id} no encontrado`);
        }
        return rol;
    }
    async update(id, dto, user) {
        const rol = await this.findOne(id);
        if (rol.tipo_rol === 'sistema' && user.tipo_usuario !== 'admin') {
            throw new common_1.ForbiddenException('No se pueden modificar roles del sistema');
        }
        await this.validateUpdatePermissions(rol, user);
        if (dto.nombre && dto.nombre.trim() !== rol.nombre) {
            if (!dto.nombre.trim()) {
                throw new common_1.BadRequestException('El nombre del rol no puede estar vacío');
            }
            const existingRol = await this.findExistingRol({
                nombre: dto.nombre,
                tipo_rol: rol.tipo_rol,
                id_organizacion: rol.id_organizacion,
                id_proyecto: rol.id_proyecto
            });
            if (existingRol && existingRol.id_rol !== id) {
                throw new common_1.ConflictException(`Ya existe un rol con el nombre "${dto.nombre.trim()}" en este contexto`);
            }
        }
        if (dto.nombre !== undefined) {
            rol.nombre = dto.nombre.trim();
        }
        if (dto.descripcion !== undefined) {
            rol.descripcion = dto.descripcion.trim();
        }
        if (dto.activo !== undefined) {
            rol.activo = dto.activo;
        }
        return this.repo.save(rol);
    }
    async remove(id, user) {
        const rol = await this.findOne(id);
        if (rol.tipo_rol === 'sistema') {
            throw new common_1.ForbiddenException('No se pueden eliminar roles del sistema');
        }
        await this.validateDeletePermissions(rol, user);
        const asignaciones = await this.asignacionRepo.find({
            where: { id_rol: id }
        });
        if (asignaciones.length > 0) {
            throw new common_1.ConflictException(`No se puede eliminar el rol porque está siendo usado en ${asignaciones.length} asignación(es)`);
        }
        await this.repo.remove(rol);
        return { message: 'Rol eliminado correctamente' };
    }
    validateTipoRol(dto) {
        if (dto.tipo_rol === 'sistema' && (dto.id_organizacion || dto.id_proyecto)) {
            throw new common_1.BadRequestException('Los roles del sistema no pueden tener id_organizacion ni id_proyecto');
        }
        if (dto.tipo_rol === 'organizacion') {
            if (!dto.id_organizacion) {
                throw new common_1.BadRequestException('Los roles de organización requieren id_organizacion');
            }
            if (dto.id_proyecto) {
                throw new common_1.BadRequestException('Los roles de organización no pueden tener id_proyecto');
            }
        }
        if (dto.tipo_rol === 'proyecto') {
            if (!dto.id_proyecto) {
                throw new common_1.BadRequestException('Los roles de proyecto requieren id_proyecto');
            }
            if (dto.id_organizacion) {
                throw new common_1.BadRequestException('Los roles de proyecto no pueden tener id_organizacion');
            }
        }
    }
    async validatePermissions(dto, user) {
        if (user.tipo_usuario === 'admin') {
            return;
        }
        if (user.tipo_usuario === 'organizacion') {
            if (dto.tipo_rol === 'sistema') {
                throw new common_1.ForbiddenException('Solo los administradores pueden crear roles del sistema');
            }
            if (dto.tipo_rol === 'organizacion') {
                const org = await this.orgRepo.findOne({ where: { id_organizacion: dto.id_organizacion, id_usuario: user.id_usuario } });
                if (!org) {
                    throw new common_1.ForbiddenException('No tienes permiso para crear roles para esta organización');
                }
            }
            if (dto.tipo_rol === 'proyecto') {
                const proyecto = await this.proyectoRepo.findOne({
                    where: { id_proyecto: dto.id_proyecto },
                    relations: ['organizacion']
                });
                if (!proyecto || proyecto.organizacion.id_usuario !== user.id_usuario) {
                    throw new common_1.ForbiddenException('No tienes permiso para crear roles para este proyecto');
                }
            }
        }
        else {
            throw new common_1.ForbiddenException('Solo administradores y organizaciones pueden crear roles');
        }
    }
    async validateUpdatePermissions(rol, user) {
        if (user.tipo_usuario === 'admin') {
            return;
        }
        if (user.tipo_usuario === 'organizacion') {
            if (rol.tipo_rol === 'organizacion' && rol.id_organizacion) {
                const org = await this.orgRepo.findOne({ where: { id_organizacion: rol.id_organizacion, id_usuario: user.id_usuario } });
                if (!org) {
                    throw new common_1.ForbiddenException('No tienes permiso para modificar este rol');
                }
            }
            else if (rol.tipo_rol === 'proyecto' && rol.id_proyecto) {
                const proyecto = await this.proyectoRepo.findOne({
                    where: { id_proyecto: rol.id_proyecto },
                    relations: ['organizacion']
                });
                if (!proyecto || proyecto.organizacion.id_usuario !== user.id_usuario) {
                    throw new common_1.ForbiddenException('No tienes permiso para modificar este rol');
                }
            }
        }
        else {
            throw new common_1.ForbiddenException('No tienes permiso para modificar roles');
        }
    }
    async validateDeletePermissions(rol, user) {
        if (user.tipo_usuario === 'admin') {
            return;
        }
        if (user.tipo_usuario === 'organizacion') {
            if (rol.tipo_rol === 'organizacion' && rol.id_organizacion) {
                const org = await this.orgRepo.findOne({ where: { id_organizacion: rol.id_organizacion, id_usuario: user.id_usuario } });
                if (!org) {
                    throw new common_1.ForbiddenException('No tienes permiso para eliminar este rol');
                }
            }
            else if (rol.tipo_rol === 'proyecto' && rol.id_proyecto) {
                const proyecto = await this.proyectoRepo.findOne({
                    where: { id_proyecto: rol.id_proyecto },
                    relations: ['organizacion']
                });
                if (!proyecto || proyecto.organizacion.id_usuario !== user.id_usuario) {
                    throw new common_1.ForbiddenException('No tienes permiso para eliminar este rol');
                }
            }
        }
        else {
            throw new common_1.ForbiddenException('No tienes permiso para eliminar roles');
        }
    }
    async findExistingRol(dto) {
        const where = {
            nombre: dto.nombre.trim(),
            tipo_rol: dto.tipo_rol
        };
        if (dto.tipo_rol === 'organizacion') {
            where.id_organizacion = dto.id_organizacion;
        }
        else if (dto.tipo_rol === 'proyecto') {
            where.id_proyecto = dto.id_proyecto;
        }
        return this.repo.findOne({ where });
    }
};
exports.RolService = RolService;
exports.RolService = RolService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __param(1, (0, typeorm_1.InjectRepository)(organizacion_entity_1.Organizacion)),
    __param(2, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __param(3, (0, typeorm_1.InjectRepository)(asignacion_entity_1.Asignacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RolService);
//# sourceMappingURL=rol.service.js.map