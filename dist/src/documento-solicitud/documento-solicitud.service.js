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
exports.DocumentoSolicitudService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const documento_solicitud_entity_1 = require("./documento-solicitud.entity");
const solicitud_inscripcion_entity_1 = require("../solicitud-inscripcion/solicitud-inscripcion.entity");
let DocumentoSolicitudService = class DocumentoSolicitudService {
    constructor(repo, solicitudRepo) {
        this.repo = repo;
        this.solicitudRepo = solicitudRepo;
    }
    async create(id_solicitud, file, tipo_documento) {
        const solicitud = await this.solicitudRepo.findOne({
            where: { id_solicitud }
        });
        if (!solicitud) {
            throw new common_1.NotFoundException(`Solicitud con ID ${id_solicitud} no encontrada`);
        }
        const documento = this.repo.create({
            id_solicitud,
            nombre_archivo: file.originalname,
            ruta_archivo: file.path || file.filename,
            tipo_documento: tipo_documento || 'general',
            tamaño: file.size,
        });
        return this.repo.save(documento);
    }
    async findBySolicitud(id_solicitud) {
        return this.repo.find({
            where: { id_solicitud },
            order: { creado_en: 'ASC' }
        });
    }
    async findOne(id) {
        const documento = await this.repo.findOne({
            where: { id_documento: id },
            relations: ['solicitud']
        });
        if (!documento) {
            throw new common_1.NotFoundException(`Documento con ID ${id} no encontrado`);
        }
        return documento;
    }
    async remove(id) {
        const documento = await this.findOne(id);
        return this.repo.remove(documento);
    }
};
exports.DocumentoSolicitudService = DocumentoSolicitudService;
exports.DocumentoSolicitudService = DocumentoSolicitudService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(documento_solicitud_entity_1.DocumentoSolicitud)),
    __param(1, (0, typeorm_1.InjectRepository)(solicitud_inscripcion_entity_1.SolicitudInscripcion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DocumentoSolicitudService);
//# sourceMappingURL=documento-solicitud.service.js.map