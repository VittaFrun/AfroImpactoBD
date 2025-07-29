"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJornadaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_jornada_dto_1 = require("./create-jornada.dto");
class UpdateJornadaDto extends (0, mapped_types_1.PartialType)(create_jornada_dto_1.CreateJornadaDto) {
}
exports.UpdateJornadaDto = UpdateJornadaDto;
//# sourceMappingURL=update-jornada.dto.js.map