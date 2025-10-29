import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProyectoFields1760808357772 implements MigrationInterface {
    name = 'UpdateProyectoFields1760808357772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Agregar campos nuevos a la tabla proyecto
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`presupuesto_total\` decimal(12,2) NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`progreso_porcentaje\` int NOT NULL DEFAULT 0`);

        // Agregar campos de auditoría a la tabla fase
        await queryRunner.query(`ALTER TABLE \`fase\` ADD \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`fase\` ADD \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);

        // Agregar campos de auditoría a la tabla tarea
        await queryRunner.query(`ALTER TABLE \`tarea\` ADD \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`tarea\` ADD \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);

        // Crear índices para optimización
        await queryRunner.query(`CREATE INDEX \`idx_proyecto_org_estado\` ON \`proyecto\` (\`id_organizacion\`, \`id_estado\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_proyecto_fechas\` ON \`proyecto\` (\`fecha_inicio\`, \`fecha_fin\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_fase_proyecto_orden\` ON \`fase\` (\`id_proyecto\`, \`orden\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_tarea_fase_estado\` ON \`tarea\` (\`id_fase\`, \`id_estado\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_asignacion_tarea_voluntario\` ON \`asignacion\` (\`id_tarea\`, \`id_voluntario\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Eliminar índices
        await queryRunner.query(`DROP INDEX \`idx_asignacion_tarea_voluntario\` ON \`asignacion\``);
        await queryRunner.query(`DROP INDEX \`idx_tarea_fase_estado\` ON \`tarea\``);
        await queryRunner.query(`DROP INDEX \`idx_fase_proyecto_orden\` ON \`fase\``);
        await queryRunner.query(`DROP INDEX \`idx_proyecto_fechas\` ON \`proyecto\``);
        await queryRunner.query(`DROP INDEX \`idx_proyecto_org_estado\` ON \`proyecto\``);

        // Eliminar campos de auditoría de tarea
        await queryRunner.query(`ALTER TABLE \`tarea\` DROP COLUMN \`actualizado_en\``);
        await queryRunner.query(`ALTER TABLE \`tarea\` DROP COLUMN \`creado_en\``);

        // Eliminar campos de auditoría de fase
        await queryRunner.query(`ALTER TABLE \`fase\` DROP COLUMN \`actualizado_en\``);
        await queryRunner.query(`ALTER TABLE \`fase\` DROP COLUMN \`creado_en\``);

        // Eliminar campos nuevos de proyecto
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`progreso_porcentaje\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`presupuesto_total\``);
    }
}
