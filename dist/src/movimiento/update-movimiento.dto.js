"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovimientoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_movimiento_dto_1 = require("./create-movimiento.dto");
class UpdateMovimientoDto extends (0, mapped_types_1.PartialType)(create_movimiento_dto_1.CreateMovimientoDto) {
}
exports.UpdateMovimientoDto = UpdateMovimientoDto;
//# sourceMappingURL=update-movimiento.dto.js.map