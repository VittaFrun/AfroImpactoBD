"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDonacionProyectoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_donacion_proyecto_dto_1 = require("./create-donacion-proyecto.dto");
class UpdateDonacionProyectoDto extends (0, mapped_types_1.PartialType)(create_donacion_proyecto_dto_1.CreateDonacionProyectoDto) {
}
exports.UpdateDonacionProyectoDto = UpdateDonacionProyectoDto;
//# sourceMappingURL=update-donacion-proyecto.dto.js.map