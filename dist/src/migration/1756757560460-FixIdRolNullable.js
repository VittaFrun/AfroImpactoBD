"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixIdRolNullable1756757560460 = void 0;
class FixIdRolNullable1756757560460 {
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `usuario` CHANGE `id_rol` `id_rol` INT NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `usuario` CHANGE `id_rol` `id_rol` INT NOT NULL");
    }
}
exports.FixIdRolNullable1756757560460 = FixIdRolNullable1756757560460;
//# sourceMappingURL=1756757560460-FixIdRolNullable.js.map