"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProyectoFields1760808357772 = void 0;
class UpdateProyectoFields1760808357772 {
    constructor() {
        this.name = 'UpdateProyectoFields1760808357772';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`presupuesto_total\` decimal(12,2) NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`progreso_porcentaje\` int NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`fase\` ADD \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`fase\` ADD \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`tarea\` ADD \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`tarea\` ADD \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`CREATE INDEX \`idx_proyecto_org_estado\` ON \`proyecto\` (\`id_organizacion\`, \`id_estado\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_proyecto_fechas\` ON \`proyecto\` (\`fecha_inicio\`, \`fecha_fin\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_fase_proyecto_orden\` ON \`fase\` (\`id_proyecto\`, \`orden\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_tarea_fase_estado\` ON \`tarea\` (\`id_fase\`, \`id_estado\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_asignacion_tarea_voluntario\` ON \`asignacion\` (\`id_tarea\`, \`id_voluntario\`)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`idx_asignacion_tarea_voluntario\` ON \`asignacion\``);
        await queryRunner.query(`DROP INDEX \`idx_tarea_fase_estado\` ON \`tarea\``);
        await queryRunner.query(`DROP INDEX \`idx_fase_proyecto_orden\` ON \`fase\``);
        await queryRunner.query(`DROP INDEX \`idx_proyecto_fechas\` ON \`proyecto\``);
        await queryRunner.query(`DROP INDEX \`idx_proyecto_org_estado\` ON \`proyecto\``);
        await queryRunner.query(`ALTER TABLE \`tarea\` DROP COLUMN \`actualizado_en\``);
        await queryRunner.query(`ALTER TABLE \`tarea\` DROP COLUMN \`creado_en\``);
        await queryRunner.query(`ALTER TABLE \`fase\` DROP COLUMN \`actualizado_en\``);
        await queryRunner.query(`ALTER TABLE \`fase\` DROP COLUMN \`creado_en\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`progreso_porcentaje\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`presupuesto_total\``);
    }
}
exports.UpdateProyectoFields1760808357772 = UpdateProyectoFields1760808357772;
//# sourceMappingURL=1760808357772-UpdateProyectoFields.js.map