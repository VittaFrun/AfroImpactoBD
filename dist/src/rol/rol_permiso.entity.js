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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolPermiso = void 0;
const typeorm_1 = require("typeorm");
const rol_entity_1 = require("./rol.entity");
const permiso_entity_1 = require("../permiso/permiso.entity");
let RolPermiso = class RolPermiso {
};
exports.RolPermiso = RolPermiso;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_rol' }),
    __metadata("design:type", Number)
], RolPermiso.prototype, "id_rol", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_permiso' }),
    __metadata("design:type", Number)
], RolPermiso.prototype, "id_permiso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entity_1.Rol, (rol) => rol.permisos),
    (0, typeorm_1.JoinColumn)({ name: 'id_rol' }),
    __metadata("design:type", rol_entity_1.Rol)
], RolPermiso.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permiso_entity_1.Permiso, (permiso) => permiso.roles),
    (0, typeorm_1.JoinColumn)({ name: 'id_permiso' }),
    __metadata("design:type", permiso_entity_1.Permiso)
], RolPermiso.prototype, "permiso", void 0);
exports.RolPermiso = RolPermiso = __decorate([
    (0, typeorm_1.Entity)({ name: 'rol_permiso' })
], RolPermiso);
//# sourceMappingURL=rol_permiso.entity.js.map