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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const voluntario_service_1 = require("../voluntario/voluntario.service");
const organizacion_service_1 = require("../organizacion/organizacion.service");
const proyecto_service_1 = require("../proyecto/proyecto.service");
const donacion_service_1 = require("../donacion/donacion.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, voluntarioService, organizacionService, proyectoService, donacionService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.voluntarioService = voluntarioService;
        this.organizacionService = organizacionService;
        this.proyectoService = proyectoService;
        this.donacionService = donacionService;
    }
    async login(email, pass) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const payload = {
            sub: user.id_usuario,
            nombre: user.nombre,
            email: user.email,
            tipo_usuario: user.tipo_usuario
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async register(registerDto) {
        const existingUser = await this.usersService.findOneByEmail(registerDto.email);
        if (existingUser) {
            throw new common_1.ConflictException('El correo electrónico ya está en uso');
        }
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const newUser = await this.usersService.create({
            nombre: registerDto.nombre,
            email: registerDto.email,
            password: hashedPassword,
            tipo_usuario: registerDto.tipo_usuario,
            id_rol: registerDto.id_rol,
        });
        if (registerDto.tipo_usuario === 'voluntario') {
            await this.voluntarioService.createBasic(newUser.id_usuario);
        }
        else if (registerDto.tipo_usuario === 'organizacion') {
            await this.organizacionService.createBasic(newUser.id_usuario, registerDto.nombre, registerDto.tipo_usuario);
        }
        const { password } = newUser, result = __rest(newUser, ["password"]);
        return result;
    }
    async getDashboardData(userPayload) {
        console.log('Fetching dashboard data for user:', userPayload.sub);
        try {
            const user = await this.usersService.findOne(userPayload.sub);
            if (!user) {
                throw new common_1.UnauthorizedException('Usuario no encontrado');
            }
            let metrics = [];
            let recentActivities = [];
            let upcomingTasks = [];
            let projectStatusData = [];
            let donationTrendData = [];
            if (user.tipo_usuario === 'organizacion') {
                const organizacion = await this.organizacionService.findByUserId(user.id_usuario);
                if (organizacion) {
                    const proyectos = await this.proyectoService.findAll(user);
                    const proyectosActivos = proyectos.filter(p => p.id_estado === 1).length;
                    const donaciones = await this.donacionService.findByOrganizacion(organizacion.id_organizacion);
                    const donacionesEsteMes = donaciones.filter(d => {
                        const fechaDonacion = new Date(d.fecha);
                        const ahora = new Date();
                        return fechaDonacion.getMonth() === ahora.getMonth() &&
                            fechaDonacion.getFullYear() === ahora.getFullYear();
                    });
                    const totalDonaciones = donacionesEsteMes.reduce((sum, d) => sum + d.monto_total, 0);
                    let tareasPendientes = 0;
                    proyectos.forEach(proyecto => {
                        if (proyecto.fases) {
                            proyecto.fases.forEach(fase => {
                                if (fase.tareas) {
                                    tareasPendientes += fase.tareas.filter(t => t.id_estado === 1).length;
                                }
                            });
                        }
                    });
                    metrics = [
                        { title: "Proyectos Activos", value: proyectosActivos.toString(), icon: "mdi-folder-heart", color: "primary" },
                        { title: "Total Proyectos", value: proyectos.length.toString(), icon: "mdi-folder-multiple", color: "info" },
                        { title: "Donaciones (Este Mes)", value: `$${totalDonaciones.toLocaleString()}`, icon: "mdi-cash-multiple", color: "success" },
                        { title: "Tareas Pendientes", value: tareasPendientes.toString(), icon: "mdi-format-list-checks", color: "warning" }
                    ];
                    recentActivities = proyectos.slice(0, 5).map(proyecto => ({
                        id: proyecto.id_proyecto,
                        type: 'project',
                        title: `Proyecto "${proyecto.nombre}" actualizado`,
                        description: `Última actualización: ${new Date(proyecto.actualizado_en).toLocaleDateString()}`,
                        timestamp: proyecto.actualizado_en,
                        icon: 'mdi-folder-edit'
                    }));
                    upcomingTasks = [];
                    proyectos.forEach(proyecto => {
                        if (proyecto.fases) {
                            proyecto.fases.forEach(fase => {
                                if (fase.tareas) {
                                    fase.tareas.forEach(tarea => {
                                        const fechaFin = new Date(tarea.fecha_fin);
                                        const ahora = new Date();
                                        const diasRestantes = Math.ceil((fechaFin.getTime() - ahora.getTime()) / (1000 * 60 * 60 * 24));
                                        if (diasRestantes <= 7 && diasRestantes >= 0) {
                                            upcomingTasks.push({
                                                id: tarea.id_tarea,
                                                title: tarea.descripcion,
                                                project: proyecto.nombre,
                                                dueDate: tarea.fecha_fin,
                                                priority: tarea.prioridad,
                                                daysLeft: diasRestantes
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                    projectStatusData = [
                        { name: 'Activos', value: proyectosActivos, color: '#00b894' },
                        { name: 'En Progreso', value: proyectos.filter(p => p.id_estado === 2).length, color: '#fdcb6e' },
                        { name: 'Completados', value: proyectos.filter(p => p.id_estado === 3).length, color: '#6c5ce7' },
                        { name: 'Pausados', value: proyectos.filter(p => p.id_estado === 4).length, color: '#fd79a8' }
                    ];
                    donationTrendData = [];
                    for (let i = 5; i >= 0; i--) {
                        const fecha = new Date();
                        fecha.setMonth(fecha.getMonth() - i);
                        const donacionesMes = donaciones.filter(d => {
                            const fechaDonacion = new Date(d.fecha);
                            return fechaDonacion.getMonth() === fecha.getMonth() &&
                                fechaDonacion.getFullYear() === fecha.getFullYear();
                        });
                        const totalMes = donacionesMes.reduce((sum, d) => sum + d.monto_total, 0);
                        donationTrendData.push({
                            month: fecha.toLocaleDateString('es-ES', { month: 'short' }),
                            amount: totalMes
                        });
                    }
                }
            }
            else if (user.tipo_usuario === 'voluntario') {
                metrics = [
                    { title: "Proyectos Participando", value: "0", icon: "mdi-folder-heart", color: "primary" },
                    { title: "Horas Voluntariadas", value: "0", icon: "mdi-clock", color: "info" },
                    { title: "Tareas Completadas", value: "0", icon: "mdi-check-circle", color: "success" },
                    { title: "Evaluaciones Recibidas", value: "0", icon: "mdi-star", color: "warning" }
                ];
            }
            return {
                metrics,
                recentActivities,
                upcomingTasks,
                projectStatusData,
                donationTrendData
            };
        }
        catch (error) {
            console.error('Error fetching dashboard data:', error);
            return {
                metrics: [
                    { title: "Proyectos Activos", value: "0", icon: "mdi-folder-heart", color: "primary" },
                    { title: "Voluntarios", value: "0", icon: "mdi-account-group", color: "info" },
                    { title: "Donaciones (Este Mes)", value: "$0", icon: "mdi-cash-multiple", color: "success" },
                    { title: "Tareas Pendientes", value: "0", icon: "mdi-format-list-checks", color: "warning" }
                ],
                recentActivities: [],
                upcomingTasks: [],
                projectStatusData: [],
                donationTrendData: []
            };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        voluntario_service_1.VoluntarioService,
        organizacion_service_1.OrganizacionService,
        proyecto_service_1.ProyectoService,
        donacion_service_1.DonacionService])
], AuthService);
//# sourceMappingURL=auth.service.js.map