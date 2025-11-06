"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTareaTimestamps1762000000001 = void 0;
class AddTareaTimestamps1762000000001 {
    constructor() {
        this.name = 'AddTareaTimestamps1762000000001';
    }
    async up(queryRunner) {
        const tareaTable = await queryRunner.getTable('tarea');
        if (tareaTable) {
            const hasCreadoEn = tareaTable.findColumnByName('creado_en');
            const hasActualizadoEn = tareaTable.findColumnByName('actualizado_en');
            if (!hasCreadoEn) {
                await queryRunner.query(`ALTER TABLE \`tarea\` ADD \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
            }
            if (!hasActualizadoEn) {
                await queryRunner.query(`ALTER TABLE \`tarea\` ADD \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
            }
        }
    }
    async down(queryRunner) {
        const tareaTable = await queryRunner.getTable('tarea');
        if (tareaTable) {
            const hasCreadoEn = tareaTable.findColumnByName('creado_en');
            const hasActualizadoEn = tareaTable.findColumnByName('actualizado_en');
            if (hasActualizadoEn) {
                await queryRunner.query(`ALTER TABLE \`tarea\` DROP COLUMN \`actualizado_en\``);
            }
            if (hasCreadoEn) {
                await queryRunner.query(`ALTER TABLE \`tarea\` DROP COLUMN \`creado_en\``);
            }
        }
    }
}
exports.AddTareaTimestamps1762000000001 = AddTareaTimestamps1762000000001;
//# sourceMappingURL=1762000000001-AddTareaTimestamps.js.map