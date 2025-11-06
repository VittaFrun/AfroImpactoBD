"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPresupuestoTotalToProyecto1761000000000 = void 0;
class AddPresupuestoTotalToProyecto1761000000000 {
    constructor() {
        this.name = 'AddPresupuestoTotalToProyecto1761000000000';
    }
    async up(queryRunner) {
        const table = await queryRunner.getTable('proyecto');
        const hasColumn = table === null || table === void 0 ? void 0 : table.findColumnByName('presupuesto_total');
        if (!hasColumn) {
            await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`presupuesto_total\` decimal(12,2) NOT NULL DEFAULT 0`);
        }
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('proyecto');
        const hasColumn = table === null || table === void 0 ? void 0 : table.findColumnByName('presupuesto_total');
        if (hasColumn) {
            await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`presupuesto_total\``);
        }
    }
}
exports.AddPresupuestoTotalToProyecto1761000000000 = AddPresupuestoTotalToProyecto1761000000000;
//# sourceMappingURL=1761000000000-AddPresupuestoTotalToProyecto.js.map