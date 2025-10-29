"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTareaFields1760808357774 = void 0;
class UpdateTareaFields1760808357774 {
    constructor() {
        this.name = 'UpdateTareaFields1760808357774';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`descripcion\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`fecha_inicio\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`fecha_fin\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`prioridad\` enum('Alta','Media','Baja') NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`complejidad\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`id_estado\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`id_fase\` int NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`descripcion\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`fecha_inicio\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`fecha_fin\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`prioridad\` enum('Alta','Media','Baja') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`complejidad\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`id_estado\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`id_fase\` int NOT NULL`);
    }
}
exports.UpdateTareaFields1760808357774 = UpdateTareaFields1760808357774;
//# sourceMappingURL=1760808357774-UpdateTareaFields.js.map