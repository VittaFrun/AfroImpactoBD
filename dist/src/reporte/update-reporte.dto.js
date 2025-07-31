"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReporteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_reporte_dto_1 = require("./create-reporte.dto");
class UpdateReporteDto extends (0, mapped_types_1.PartialType)(create_reporte_dto_1.CreateReporteDto) {
}
exports.UpdateReporteDto = UpdateReporteDto;
//# sourceMappingURL=update-reporte.dto.js.map