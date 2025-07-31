"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHabilidadDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_habilidad_dto_1 = require("./create-habilidad.dto");
class UpdateHabilidadDto extends (0, mapped_types_1.PartialType)(create_habilidad_dto_1.CreateHabilidadDto) {
}
exports.UpdateHabilidadDto = UpdateHabilidadDto;
//# sourceMappingURL=update-habilidad.dto.js.map