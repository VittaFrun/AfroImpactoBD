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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const rol_entity_1 = require("../rol/rol.entity");
let UsersService = class UsersService {
    constructor(usersRepository, rolesRepository) {
        this.usersRepository = usersRepository;
        this.rolesRepository = rolesRepository;
    }
    async create(createUserDto) {
        const user = this.usersRepository.create({
            nombre: createUserDto.nombre,
            email: createUserDto.email,
            password: createUserDto.password,
            id_rol: createUserDto.id_rol,
            tipo_usuario: createUserDto.tipo_usuario,
        });
        return this.usersRepository.save(user);
    }
    async findOneByEmail(email) {
        const user = await this.usersRepository.findOne({
            where: { email: email },
            select: ['id_usuario', 'nombre', 'email', 'password', 'id_rol', 'tipo_usuario', 'creado_en', 'actualizado_en'],
        });
        return user !== null && user !== void 0 ? user : undefined;
    }
    async findOneByEmailWithRol(email) {
        const user = await this.usersRepository.findOne({ where: { email: email }, relations: ['rol'] });
        return user !== null && user !== void 0 ? user : undefined;
    }
    async findOne(id) {
        const user = await this.usersRepository.findOne({ where: { id_usuario: id } });
        return user !== null && user !== void 0 ? user : undefined;
    }
    async addRolToUser(userId, rolId) {
        const user = await this.usersRepository.findOne({ where: { id_usuario: userId }, relations: ['rol'] });
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con ID "${userId}" no encontrado`);
        }
        const rol = await this.rolesRepository.findOne({ where: { id_rol: rolId } });
        if (!rol) {
            throw new common_1.NotFoundException(`Rol con ID "${rolId}" no encontrado`);
        }
        user.rol = rol;
        return this.usersRepository.save(user);
    }
    async remove(id) {
        const user = await this.usersRepository.findOne({ where: { id_usuario: id } });
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con ID "${id}" no encontrado`);
        }
        await this.usersRepository.remove(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Usuario)),
    __param(1, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map