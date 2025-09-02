"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOrganizacionIdToProyecto1755804633995 = void 0;
const typeorm_1 = require("typeorm");
class AddOrganizacionIdToProyecto1755804633995 {
    async up(queryRunner) {
        await queryRunner.addColumn("proyecto", new typeorm_1.TableColumn({
            name: "id_organizacion",
            type: "int",
            isNullable: false,
        }));
        await queryRunner.createForeignKey("proyecto", new typeorm_1.TableForeignKey({
            columnNames: ["id_organizacion"],
            referencedColumnNames: ["id_organizacion"],
            referencedTableName: "organizacion",
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("proyecto", "FK_proyecto_organizacion");
        await queryRunner.dropColumn("proyecto", "id_organizacion");
    }
}
exports.AddOrganizacionIdToProyecto1755804633995 = AddOrganizacionIdToProyecto1755804633995;
//# sourceMappingURL=1755804633995-AddOrganizacionIdToProyecto.js.map