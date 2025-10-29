import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTareaFields1760808357774 implements MigrationInterface {
    name = 'UpdateTareaFields1760808357774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Make all tarea fields nullable to avoid constraint issues
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`descripcion\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`fecha_inicio\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`fecha_fin\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`prioridad\` enum('Alta','Media','Baja') NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`complejidad\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`id_estado\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`id_fase\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert tarea fields to not nullable
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`descripcion\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`fecha_inicio\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`fecha_fin\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`prioridad\` enum('Alta','Media','Baja') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`complejidad\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`id_estado\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tarea\` MODIFY COLUMN \`id_fase\` int NOT NULL`);
    }
}

