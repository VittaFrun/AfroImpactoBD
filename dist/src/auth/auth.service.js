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
let AuthService = class AuthService {
    constructor(usersService, jwtService, voluntarioService, organizacionService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.voluntarioService = voluntarioService;
        this.organizacionService = organizacionService;
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
        console.log('Fetching initial dashboard data for user:', userPayload.sub);
        return {
            metrics: [
                { title: "Proyectos Activos", value: "0", icon: "mdi-folder-heart", color: "primary" },
                { title: "Voluntarios", value: "0", icon: "mdi-account-group", color: "success" },
                { title: "Donaciones (Este Mes)", value: "$0", icon: "mdi-cash-multiple", color: "warning" },
                { title: "Tareas Pendientes", value: "0", icon: "mdi-format-list-checks", color: "error" }
            ],
            recentActivities: [],
            upcomingTasks: [],
            projectStatusData: [],
            donationTrendData: []
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        voluntario_service_1.VoluntarioService,
        organizacion_service_1.OrganizacionService])
], AuthService);
//# sourceMappingURL=auth.service.js.map