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
const proyecto_beneficio_entity_1 = require("../proyecto-beneficio/proyecto-beneficio.entity");
const asignacion_entity_1 = require("../asignacion/asignacion.entity");
const voluntario_entity_1 = require("../voluntario/voluntario.entity");
const rol_entity_1 = require("../rol/rol.entity");
const horas_voluntariadas_entity_1 = require("../horas-voluntariadas/horas-voluntariadas.entity");
let ProyectoService = class ProyectoService {
    constructor(repo, orgRepo, faseRepo, tareaRepo, beneficioRepo, asignacionRepo, voluntarioRepo, rolRepo, horasRepo) {
        this.repo = repo;
        this.orgRepo = orgRepo;
        this.faseRepo = faseRepo;
        this.tareaRepo = tareaRepo;
        this.beneficioRepo = beneficioRepo;
        this.asignacionRepo = asignacionRepo;
        this.voluntarioRepo = voluntarioRepo;
        this.rolRepo = rolRepo;
        this.horasRepo = horasRepo;
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
        let id_estado = dto.id_estado || 1;
        if (id_estado === 0) {
            id_estado = 1;
        }
        const proyecto = this.repo.create({
            nombre: dto.nombre.trim(),
            descripcion: dto.descripcion.trim(),
            objetivo: dto.objetivo.trim(),
            ubicacion: dto.ubicacion.trim(),
            fecha_inicio: dto.fecha_inicio,
            fecha_fin: dto.fecha_fin,
            imagen_principal: dto.imagen_principal || '/assets/images/background_login.png',
            documento: dto.documento || null,
            presupuesto_total: dto.presupuesto_total || 0,
            categoria: dto.categoria || null,
            es_publico: dto.es_publico !== undefined ? dto.es_publico : false,
            requisitos: dto.requisitos || null,
            id_estado: id_estado,
            id_organizacion: organizacion.id_organizacion
        });
        return this.repo.save(proyecto);
    }
    async findAll(user) {
        try {
            if (user.tipo_usuario === 'admin') {
                const proyectos = await this.repo.find({
                    relations: ['organizacion', 'estado', 'fases', 'fases.tareas', 'beneficio'],
                    order: { creado_en: 'DESC' }
                });
                return proyectos || [];
            }
            if (user.tipo_usuario === 'organizacion') {
                const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
                if (!organizacion) {
                    return [];
                }
                const proyectos = await this.repo.find({
                    where: { id_organizacion: organizacion.id_organizacion },
                    relations: ['organizacion', 'estado', 'fases', 'fases.tareas', 'beneficio'],
                    order: { creado_en: 'DESC' }
                });
                return proyectos || [];
            }
            if (user.tipo_usuario === 'voluntario') {
                return this.findProjectsByVoluntario(user.id_usuario);
            }
            return [];
        }
        catch (error) {
            console.error('Error en findAll proyectos:', error);
            try {
                if (user.tipo_usuario === 'admin') {
                    const proyectos = await this.repo.find({
                        relations: ['organizacion', 'estado', 'fases'],
                        order: { creado_en: 'DESC' }
                    });
                    for (const proyecto of proyectos) {
                        if (proyecto.fases && proyecto.fases.length > 0) {
                            for (const fase of proyecto.fases) {
                                try {
                                    fase.tareas = await this.tareaRepo.find({
                                        where: { id_fase: fase.id_fase },
                                    });
                                }
                                catch (tareaError) {
                                    console.error(`Error loading tasks for phase ${fase.id_fase}:`, tareaError);
                                    fase.tareas = [];
                                }
                            }
                        }
                    }
                    return proyectos || [];
                }
                if (user.tipo_usuario === 'organizacion') {
                    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
                    if (organizacion) {
                        const proyectos = await this.repo.find({
                            where: { id_organizacion: organizacion.id_organizacion },
                            relations: ['organizacion', 'estado', 'fases'],
                            order: { creado_en: 'DESC' }
                        });
                        for (const proyecto of proyectos) {
                            if (proyecto.fases && proyecto.fases.length > 0) {
                                for (const fase of proyecto.fases) {
                                    try {
                                        fase.tareas = await this.tareaRepo.find({
                                            where: { id_fase: fase.id_fase },
                                        });
                                    }
                                    catch (tareaError) {
                                        console.error(`Error loading tasks for phase ${fase.id_fase}:`, tareaError);
                                        fase.tareas = [];
                                    }
                                }
                            }
                        }
                        return proyectos || [];
                    }
                }
            }
            catch (fallbackError) {
                console.error('Error en fallback findAll:', fallbackError);
            }
            return [];
        }
    }
    async findOne(id) {
        try {
            const proyecto = await this.repo.findOne({
                where: { id_proyecto: id },
                relations: ['organizacion', 'estado', 'fases', 'fases.tareas', 'fases.tareas.asignaciones', 'fases.tareas.asignaciones.rol', 'fases.tareas.asignaciones.voluntario', 'fases.tareas.asignaciones.voluntario.usuario', 'beneficio'],
            });
            if (!proyecto) {
                throw new common_1.NotFoundException(`Proyecto con ID ${id} no encontrado`);
            }
            return proyecto;
        }
        catch (error) {
            console.error('Error loading proyecto with relations:', error);
            const proyecto = await this.repo.findOne({
                where: { id_proyecto: id },
                relations: ['organizacion', 'estado', 'fases', 'beneficio'],
            });
            if (!proyecto) {
                throw new common_1.NotFoundException(`Proyecto con ID ${id} no encontrado`);
            }
            if (proyecto.fases && proyecto.fases.length > 0) {
                for (const fase of proyecto.fases) {
                    try {
                        const tareas = await this.tareaRepo.find({
                            where: { id_fase: fase.id_fase },
                            relations: ['asignaciones', 'asignaciones.rol', 'asignaciones.voluntario', 'asignaciones.voluntario.usuario'],
                        });
                        fase.tareas = tareas || [];
                    }
                    catch (tareaError) {
                        console.error(`Error loading tasks for phase ${fase.id_fase}:`, tareaError);
                        fase.tareas = [];
                    }
                }
            }
            return proyecto;
        }
    }
    async findPublicProjects() {
        try {
            const proyectos = await this.repo.find({
                where: [
                    {
                        es_publico: true,
                        id_estado: 1
                    },
                    {
                        es_publico: true,
                        id_estado: 7
                    },
                    {
                        es_publico: true,
                        id_estado: 5
                    },
                    {
                        es_publico: true,
                        id_estado: 6
                    }
                ],
                relations: ['organizacion', 'estado', 'beneficio'],
                order: { creado_en: 'DESC' }
            });
            return proyectos || [];
        }
        catch (error) {
            console.error('Error loading public projects:', error);
            try {
                const proyectos = await this.repo.find({
                    where: {
                        es_publico: true
                    },
                    relations: ['organizacion', 'estado', 'beneficio'],
                    order: { creado_en: 'DESC' }
                });
                return proyectos.filter(p => {
                    var _a, _b;
                    const estadoNombre = ((_b = (_a = p.estado) === null || _a === void 0 ? void 0 : _a.nombre) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || '';
                    const estadoId = p.id_estado;
                    return estadoId !== 2 &&
                        estadoId !== 3 &&
                        estadoId !== 4 &&
                        estadoId !== 9 &&
                        !estadoNombre.includes('cerrado');
                }) || [];
            }
            catch (fallbackError) {
                console.error('Error en fallback de findPublicProjects:', fallbackError);
                return [];
            }
        }
    }
    async update(id, dto, user) {
        const proyecto = await this.findOne(id);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para actualizar este proyecto.');
        }
        if (dto.nombre !== undefined)
            proyecto.nombre = dto.nombre.trim();
        if (dto.descripcion !== undefined)
            proyecto.descripcion = dto.descripcion.trim();
        if (dto.objetivo !== undefined)
            proyecto.objetivo = dto.objetivo.trim();
        if (dto.ubicacion !== undefined)
            proyecto.ubicacion = dto.ubicacion.trim();
        if (dto.fecha_inicio !== undefined)
            proyecto.fecha_inicio = typeof dto.fecha_inicio === 'string' ? new Date(dto.fecha_inicio) : dto.fecha_inicio;
        if (dto.fecha_fin !== undefined)
            proyecto.fecha_fin = typeof dto.fecha_fin === 'string' ? new Date(dto.fecha_fin) : dto.fecha_fin;
        if (dto.imagen_principal !== undefined)
            proyecto.imagen_principal = dto.imagen_principal;
        if (dto.documento !== undefined)
            proyecto.documento = dto.documento;
        if (dto.presupuesto_total !== undefined)
            proyecto.presupuesto_total = dto.presupuesto_total;
        if (dto.categoria !== undefined)
            proyecto.categoria = dto.categoria;
        if (dto.es_publico !== undefined)
            proyecto.es_publico = dto.es_publico;
        if (dto.requisitos !== undefined)
            proyecto.requisitos = dto.requisitos;
        if (dto.id_estado !== undefined)
            proyecto.id_estado = dto.id_estado;
        return this.repo.save(proyecto);
    }
    async remove(id, user) {
        const proyecto = await this.findOne(id);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para eliminar este proyecto.');
        }
        try {
            return await this.repo.remove(proyecto);
        }
        catch (error) {
            const errorMessage = error.message || '';
            const errorCode = error.code || '';
            if (errorCode === 'ER_ROW_IS_REFERENCED_2' ||
                errorCode === '23503' ||
                errorMessage.includes('foreign key constraint') ||
                errorMessage.includes('Cannot delete or update a parent row')) {
                throw new common_1.BadRequestException('No se puede eliminar el proyecto porque tiene registros relacionados (solicitudes, asignaciones, donaciones, etc.). Por favor, elimina primero todos los registros relacionados.');
            }
            throw error;
        }
    }
    async addFase(proyectoId, dto, user) {
        const proyecto = await this.findOne(proyectoId);
        const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
        if (user.tipo_usuario !== 'admin' && proyecto.id_organizacion !== organizacion.id_organizacion) {
            throw new common_1.ForbiddenException('No tienes permiso para agregar fases a este proyecto.');
        }
        const fase = this.faseRepo.create({
            nombre: dto.nombre.trim(),
            descripcion: dto.descripcion.trim(),
            orden: dto.orden,
            id_proyecto: proyectoId,
        });
        const savedFase = await this.faseRepo.save(fase);
        console.log(`Fase creada exitosamente:`, savedFase);
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
    async findProjectsByVoluntario(id_usuario) {
        try {
            const voluntario = await this.voluntarioRepo.findOne({
                where: { id_usuario },
                relations: ['usuario']
            });
            if (!voluntario) {
                console.log(`Voluntario no encontrado para usuario ${id_usuario}`);
                return [];
            }
            console.log(`Buscando proyectos para voluntario ${voluntario.id_voluntario}`);
            let asignaciones;
            try {
                asignaciones = await this.asignacionRepo.find({
                    where: { id_voluntario: voluntario.id_voluntario },
                    relations: ['tarea', 'tarea.fase', 'tarea.fase.proyecto', 'rol']
                });
            }
            catch (relationError) {
                console.error('Error cargando asignaciones con relaciones:', relationError);
                asignaciones = await this.asignacionRepo.find({
                    where: { id_voluntario: voluntario.id_voluntario }
                });
                for (const asignacion of asignaciones) {
                    try {
                        const tarea = await this.tareaRepo.findOne({
                            where: { id_tarea: asignacion.id_tarea },
                            relations: ['fase', 'fase.proyecto']
                        });
                        asignacion.tarea = tarea;
                        if (asignacion.id_rol) {
                            const rol = await this.rolRepo.findOne({
                                where: { id_rol: asignacion.id_rol }
                            });
                            asignacion.rol = rol;
                        }
                    }
                    catch (loadError) {
                        console.error(`Error cargando relaciones para asignación ${asignacion.id_asignacion}:`, loadError);
                    }
                }
            }
            console.log(`Encontradas ${asignaciones.length} asignaciones`);
            if (asignaciones.length === 0) {
                return [];
            }
            const proyectosMap = new Map();
            asignaciones.forEach(asignacion => {
                var _a, _b;
                const proyecto = (_b = (_a = asignacion.tarea) === null || _a === void 0 ? void 0 : _a.fase) === null || _b === void 0 ? void 0 : _b.proyecto;
                if (!proyecto)
                    return;
                const proyectoId = proyecto.id_proyecto;
                if (!proyectosMap.has(proyectoId)) {
                    proyectosMap.set(proyectoId, {
                        proyecto: proyecto,
                        roles: new Set(),
                        rolesArray: []
                    });
                }
                if (asignacion.rol) {
                    proyectosMap.get(proyectoId).roles.add(asignacion.rol.id_rol);
                }
            });
            const proyectosIds = Array.from(proyectosMap.keys());
            const proyectos = await this.repo.find({
                where: proyectosIds.map(id => ({ id_proyecto: id })),
                relations: ['organizacion', 'estado', 'beneficio'],
                order: { creado_en: 'DESC' }
            });
            return proyectos.map(proyecto => {
                const proyectoData = proyectosMap.get(proyecto.id_proyecto);
                const rolesIds = Array.from(proyectoData.roles);
                const rolesAsignados = asignaciones
                    .filter(a => {
                    var _a, _b, _c;
                    const proyId = (_c = (_b = (_a = a.tarea) === null || _a === void 0 ? void 0 : _a.fase) === null || _b === void 0 ? void 0 : _b.proyecto) === null || _c === void 0 ? void 0 : _c.id_proyecto;
                    return proyId === proyecto.id_proyecto && a.rol;
                })
                    .map(a => ({
                    id_rol: a.rol.id_rol,
                    nombre: a.rol.nombre,
                    descripcion: a.rol.descripcion,
                    tipo_rol: a.rol.tipo_rol
                }))
                    .filter((rol, index, self) => index === self.findIndex(r => r.id_rol === rol.id_rol));
                return Object.assign(Object.assign({}, proyecto), { rolesAsignados: rolesAsignados, roles: rolesAsignados.map(r => r.nombre).join(', ') });
            });
        }
        catch (error) {
            console.error('Error en findProjectsByVoluntario:', error);
            return [];
        }
    }
    async findOneForVolunteer(id_proyecto, id_usuario) {
        const proyecto = await this.findOne(id_proyecto);
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${id_proyecto} no encontrado`);
        }
        const voluntario = await this.voluntarioRepo.findOne({ where: { id_usuario } });
        if (!voluntario) {
            throw new common_1.NotFoundException('Voluntario no encontrado');
        }
        const asignaciones = await this.asignacionRepo.find({
            where: { id_voluntario: voluntario.id_voluntario },
            relations: ['tarea', 'tarea.fase', 'tarea.estado', 'rol']
        });
        const asignacionesProyecto = asignaciones.filter(a => { var _a, _b; return ((_b = (_a = a.tarea) === null || _a === void 0 ? void 0 : _a.fase) === null || _b === void 0 ? void 0 : _b.id_proyecto) === id_proyecto; });
        const rolesAsignados = asignacionesProyecto
            .map(a => a.rol)
            .filter((rol, index, self) => rol && index === self.findIndex(r => r && r.id_rol === rol.id_rol));
        const horas = await this.horasRepo.find({
            where: {
                id_voluntario: voluntario.id_voluntario,
                id_proyecto: id_proyecto
            },
            relations: ['tarea'],
            order: { fecha: 'DESC', creado_en: 'DESC' }
        });
        const totalHoras = horas.reduce((sum, h) => sum + parseFloat(h.horas_trabajadas.toString()), 0);
        const horasVerificadas = horas.filter(h => h.verificada).reduce((sum, h) => sum + parseFloat(h.horas_trabajadas.toString()), 0);
        const tareasCompletadas = asignacionesProyecto.filter(a => {
            var _a, _b, _c;
            const estado = (_a = a.tarea) === null || _a === void 0 ? void 0 : _a.estado;
            return estado && (((_b = estado.nombre) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes('complet')) || ((_c = estado.nombre) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes('finaliz')));
        }).length;
        return Object.assign(Object.assign({}, proyecto), { rolesAsignados: rolesAsignados, asignaciones: asignacionesProyecto, horas: horas, resumenHoras: {
                totalHoras: parseFloat(totalHoras.toFixed(2)),
                horasVerificadas: parseFloat(horasVerificadas.toFixed(2)),
                horasPendientes: parseFloat((totalHoras - horasVerificadas).toFixed(2)),
                totalRegistros: horas.length
            }, progresoPersonal: {
                tareasAsignadas: asignacionesProyecto.length,
                tareasCompletadas: tareasCompletadas,
                porcentajeCompletado: asignacionesProyecto.length > 0
                    ? Math.round((tareasCompletadas / asignacionesProyecto.length) * 100)
                    : 0
            } });
    }
};
exports.ProyectoService = ProyectoService;
exports.ProyectoService = ProyectoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __param(1, (0, typeorm_1.InjectRepository)(organizacion_entity_1.Organizacion)),
    __param(2, (0, typeorm_1.InjectRepository)(fase_entity_1.Fase)),
    __param(3, (0, typeorm_1.InjectRepository)(tarea_entity_1.Tarea)),
    __param(4, (0, typeorm_1.InjectRepository)(proyecto_beneficio_entity_1.ProyectoBeneficio)),
    __param(5, (0, typeorm_1.InjectRepository)(asignacion_entity_1.Asignacion)),
    __param(6, (0, typeorm_1.InjectRepository)(voluntario_entity_1.Voluntario)),
    __param(7, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __param(8, (0, typeorm_1.InjectRepository)(horas_voluntariadas_entity_1.HorasVoluntariadas)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProyectoService);
//# sourceMappingURL=proyecto.service.js.map