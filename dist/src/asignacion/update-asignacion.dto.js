"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsignacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_asignacion_dto_1 = require("./create-asignacion.dto");
class UpdateAsignacionDto extends (0, mapped_types_1.PartialType)(create_asignacion_dto_1.CreateAsignacionDto) {
}
exports.UpdateAsignacionDto = UpdateAsignacionDto;
//# sourceMappingURL=update-asignacion.dto.js.map