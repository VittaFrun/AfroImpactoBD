"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrganizacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_organizacion_dto_1 = require("./create-organizacion.dto");
class UpdateOrganizacionDto extends (0, mapped_types_1.PartialType)(create_organizacion_dto_1.CreateOrganizacionDto) {
}
exports.UpdateOrganizacionDto = UpdateOrganizacionDto;
//# sourceMappingURL=update-organizacion.dto.js.map