"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDonacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_donacion_dto_1 = require("./create-donacion.dto");
class UpdateDonacionDto extends (0, mapped_types_1.PartialType)(create_donacion_dto_1.CreateDonacionDto) {
}
exports.UpdateDonacionDto = UpdateDonacionDto;
//# sourceMappingURL=update-donacion.dto.js.map