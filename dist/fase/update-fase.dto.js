"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFaseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_fase_dto_1 = require("./create-fase.dto");
class UpdateFaseDto extends (0, mapped_types_1.PartialType)(create_fase_dto_1.CreateFaseDto) {
}
exports.UpdateFaseDto = UpdateFaseDto;
//# sourceMappingURL=update-fase.dto.js.map