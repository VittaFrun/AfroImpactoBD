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
exports.PermisoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const permiso_entity_1 = require("./permiso.entity");
let PermisoService = class PermisoService {
    constructor(permisoRepository) {
        this.permisoRepository = permisoRepository;
    }
    findAll() {
        return this.permisoRepository.find();
    }
    findOne(id) {
        return this.permisoRepository.findOne({ where: { id_permiso: id } });
    }
    create(createPermisoDto) {
        const permiso = this.permisoRepository.create(createPermisoDto);
        return this.permisoRepository.save(permiso);
    }
    async update(id, updatePermisoDto) {
        await this.permisoRepository.update(id, updatePermisoDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.permisoRepository.delete(id);
    }
};
exports.PermisoService = PermisoService;
exports.PermisoService = PermisoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(permiso_entity_1.Permiso)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PermisoService);
//# sourceMappingURL=permiso.service.js.map