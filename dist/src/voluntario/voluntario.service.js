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
exports.VoluntarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const voluntario_entity_1 = require("./voluntario.entity");
const user_entity_1 = require("../users/user.entity");
const estado_entity_1 = require("../estado/estado.entity");
const jornada_entity_1 = require("../jornada/jornada.entity");
let VoluntarioService = class VoluntarioService {
    constructor(repo, usuarioRepo, estadoRepo, jornadaRepo) {
        this.repo = repo;
        this.usuarioRepo = usuarioRepo;
        this.estadoRepo = estadoRepo;
        this.jornadaRepo = jornadaRepo;
    }
    create(dto) {
        return this.repo.save(dto);
    }
    async createBasic(id_usuario) {
        const usuario = await this.usuarioRepo.findOne({
            where: { id_usuario }
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id_usuario} no encontrado`);
        }
        const existingVoluntario = await this.repo.findOne({
            where: { id_usuario }
        });
        if (existingVoluntario) {
            throw new common_1.ConflictException(`Ya existe un voluntario para el usuario ${id_usuario}`);
        }
        let id_estado;
        const estadoActivo = await this.estadoRepo.findOne({
            where: { nombre: 'activo' }
        });
        if (!estadoActivo) {
            const estados = await this.estadoRepo.find({
                order: { id_estado: 'ASC' },
                take: 1
            });
            if (!estados || estados.length === 0) {
                throw new common_1.NotFoundException('No se encontró ningún estado en la base de datos. Por favor, crea al menos un estado.');
            }
            id_estado = estados[0].id_estado;
            console.warn(`No se encontró estado 'activo', usando estado con ID ${id_estado}`);
        }
        else {
            id_estado = estadoActivo.id_estado;
        }
        let id_jornada;
        let jornada = await this.jornadaRepo.findOne({
            where: { nombre: 'Completa' }
        });
        if (!jornada) {
            const jornadas = await this.jornadaRepo.find({
                order: { id_jornada: 'ASC' },
                take: 1
            });
            if (jornadas && jornadas.length > 0) {
                jornada = jornadas[0];
            }
        }
        if (!jornada) {
            const nuevaJornada = this.jornadaRepo.create({
                nombre: 'Completa'
            });
            jornada = await this.jornadaRepo.save(nuevaJornada);
            console.log(`Jornada por defecto creada con ID ${jornada.id_jornada}`);
        }
        id_jornada = jornada.id_jornada;
        try {
            const newVoluntario = this.repo.create({
                id_usuario,
                id_jornada: id_jornada,
                id_estado: id_estado,
                disponibilidad: 'No disponible',
            });
            const saved = await this.repo.save(newVoluntario);
            console.log(`Voluntario creado exitosamente para usuario ${id_usuario}, ID: ${saved.id_voluntario}`);
            return saved;
        }
        catch (error) {
            console.error(`Error al guardar voluntario para usuario ${id_usuario}:`, error);
            throw error;
        }
    }
    findAll() {
        return this.repo.find({
            relations: ['usuario', 'estado', 'jornada']
        });
    }
    findOne(id) {
        return this.repo.findOne({
            where: { id_voluntario: id },
            relations: ['usuario', 'estado', 'jornada']
        });
    }
    async findByUserId(id_usuario) {
        const voluntario = await this.repo.findOne({
            where: { id_usuario },
            relations: ['usuario', 'estado', 'jornada']
        });
        if (!voluntario) {
            throw new common_1.NotFoundException('Voluntario no encontrado');
        }
        return voluntario;
    }
    async updateByUserId(id_usuario, dto) {
        const voluntario = await this.findByUserId(id_usuario);
        this.repo.merge(voluntario, dto);
        return this.repo.save(voluntario);
    }
    update(id, dto) {
        return this.repo.update(id, dto);
    }
    remove(id) {
        return this.repo.delete(id);
    }
};
exports.VoluntarioService = VoluntarioService;
exports.VoluntarioService = VoluntarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(voluntario_entity_1.Voluntario)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(estado_entity_1.Estado)),
    __param(3, (0, typeorm_1.InjectRepository)(jornada_entity_1.Jornada)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], VoluntarioService);
//# sourceMappingURL=voluntario.service.js.map