"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVoluntarioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_voluntario_dto_1 = require("./create-voluntario.dto");
class UpdateVoluntarioDto extends (0, mapped_types_1.PartialType)(create_voluntario_dto_1.CreateVoluntarioDto) {
}
exports.UpdateVoluntarioDto = UpdateVoluntarioDto;
//# sourceMappingURL=update-voluntario.dto.js.map