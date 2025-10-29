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
exports.OrganizacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const organizacion_entity_1 = require("./organizacion.entity");
const user_entity_1 = require("../users/user.entity");
let OrganizacionService = class OrganizacionService {
    constructor(repo, usuarioRepo) {
        this.repo = repo;
        this.usuarioRepo = usuarioRepo;
    }
    async createBasic(id_usuario, nombre, tipo) {
        const usuario = await this.usuarioRepo.findOne({ where: { id_usuario } });
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        const organizacion = this.repo.create({
            usuario,
            nombre,
            tipo,
            sitio_web: '',
            pais: '',
            ciudad: '',
            areas_enfoque: '',
            mision_vision: '',
        });
        return this.repo.save(organizacion);
    }
    create(dto) {
        return this.repo.save(dto);
    }
    findAll() {
        return this.repo.find();
    }
    findOne(id) {
        return this.repo.findOne({ where: { id_organizacion: id } });
    }
    async findByUserId(id_usuario) {
        return this.repo.findOne({ where: { id_usuario } });
    }
    update(id, dto) {
        return this.repo.update(id, dto);
    }
    remove(id) {
        return this.repo.delete(id);
    }
};
exports.OrganizacionService = OrganizacionService;
exports.OrganizacionService = OrganizacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(organizacion_entity_1.Organizacion)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], OrganizacionService);
//# sourceMappingURL=organizacion.service.js.map