"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNewTablesAndFields1760888000000 = void 0;
class AddNewTablesAndFields1760888000000 {
    constructor() {
        this.name = 'AddNewTablesAndFields1760888000000';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`telefono\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`organizacion\` ADD \`nombre_corto\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`organizacion\` ADD \`descripcion\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`organizacion\` ADD \`logo\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`organizacion\` ADD \`color_primario\` varchar(7) NULL`);
        await queryRunner.query(`ALTER TABLE \`organizacion\` ADD \`color_secundario\` varchar(7) NULL`);
        await queryRunner.query(`ALTER TABLE \`organizacion\` ADD \`tema\` varchar(20) NOT NULL DEFAULT 'claro'`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`categoria\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`es_publico\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`reporte\` ADD \`formato\` varchar(20) NOT NULL DEFAULT 'PDF'`);
        await queryRunner.query(`ALTER TABLE \`reporte\` ADD \`estado\` varchar(20) NOT NULL DEFAULT 'pendiente'`);
        await queryRunner.query(`ALTER TABLE \`reporte\` ADD \`incluir_graficos\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`reporte\` ADD \`descargas\` int NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`reporte\` ADD \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`reporte\` ADD \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`archivo\` ADD \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`
            CREATE TABLE \`preferencia_usuario\` (
                \`id_preferencia\` int NOT NULL AUTO_INCREMENT,
                \`id_usuario\` int NOT NULL,
                \`notificaciones_email\` tinyint NOT NULL DEFAULT 1,
                \`resumen_semanal\` tinyint NOT NULL DEFAULT 1,
                \`recordatorios\` tinyint NOT NULL DEFAULT 1,
                \`notificaciones_push\` tinyint NOT NULL DEFAULT 1,
                \`modo_oscuro\` tinyint NOT NULL DEFAULT 0,
                \`idioma\` varchar(10) NOT NULL DEFAULT 'es',
                \`zona_horaria\` varchar(50) NOT NULL DEFAULT 'America/Bogota',
                \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id_preferencia\`),
                KEY \`FK_preferencia_usuario\` (\`id_usuario\`),
                CONSTRAINT \`FK_preferencia_usuario\` FOREIGN KEY (\`id_usuario\`) REFERENCES \`usuario\` (\`id_usuario\`) ON DELETE CASCADE
            ) ENGINE=InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`configuracion_seguridad\` (
                \`id_config_seguridad\` int NOT NULL AUTO_INCREMENT,
                \`id_usuario\` int NOT NULL,
                \`two_factor_enabled\` tinyint NOT NULL DEFAULT 0,
                \`two_factor_secret\` varchar(255) NULL,
                \`sso_enabled\` tinyint NOT NULL DEFAULT 0,
                \`sso_provider\` varchar(50) NULL,
                \`session_timeout\` int NOT NULL DEFAULT 3600,
                \`ip_whitelist\` text NULL,
                \`audit_log_enabled\` tinyint NOT NULL DEFAULT 0,
                \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id_config_seguridad\`),
                KEY \`FK_config_seguridad_usuario\` (\`id_usuario\`),
                CONSTRAINT \`FK_config_seguridad_usuario\` FOREIGN KEY (\`id_usuario\`) REFERENCES \`usuario\` (\`id_usuario\`) ON DELETE CASCADE
            ) ENGINE=InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`integracion\` (
                \`id_integracion\` int NOT NULL AUTO_INCREMENT,
                \`id_usuario\` int NOT NULL,
                \`tipo\` varchar(50) NOT NULL,
                \`nombre\` varchar(100) NOT NULL,
                \`habilitada\` tinyint NOT NULL DEFAULT 0,
                \`token_acceso\` text NULL,
                \`token_refresh\` text NULL,
                \`configuracion\` text NULL,
                \`expiracion_token\` datetime NULL,
                \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id_integracion\`),
                KEY \`FK_integracion_usuario\` (\`id_usuario\`),
                CONSTRAINT \`FK_integracion_usuario\` FOREIGN KEY (\`id_usuario\`) REFERENCES \`usuario\` (\`id_usuario\`) ON DELETE CASCADE
            ) ENGINE=InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`horas_voluntariadas\` (
                \`id_horas\` int NOT NULL AUTO_INCREMENT,
                \`id_voluntario\` int NOT NULL,
                \`id_proyecto\` int NOT NULL,
                \`id_tarea\` int NULL,
                \`fecha\` date NOT NULL,
                \`horas_trabajadas\` decimal(4,2) NOT NULL,
                \`descripcion\` text NULL,
                \`verificada\` tinyint NOT NULL DEFAULT 0,
                \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id_horas\`),
                KEY \`FK_horas_voluntario\` (\`id_voluntario\`),
                KEY \`FK_horas_proyecto\` (\`id_proyecto\`),
                KEY \`FK_horas_tarea\` (\`id_tarea\`),
                CONSTRAINT \`FK_horas_voluntario\` FOREIGN KEY (\`id_voluntario\`) REFERENCES \`voluntario\` (\`id_voluntario\`) ON DELETE CASCADE,
                CONSTRAINT \`FK_horas_proyecto\` FOREIGN KEY (\`id_proyecto\`) REFERENCES \`proyecto\` (\`id_proyecto\`) ON DELETE CASCADE,
                CONSTRAINT \`FK_horas_tarea\` FOREIGN KEY (\`id_tarea\`) REFERENCES \`tarea\` (\`id_tarea\`) ON DELETE SET NULL
            ) ENGINE=InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`logro\` (
                \`id_logro\` int NOT NULL AUTO_INCREMENT,
                \`nombre\` varchar(100) NOT NULL,
                \`descripcion\` text NOT NULL,
                \`icono\` varchar(50) NULL,
                \`puntos\` int NOT NULL DEFAULT 0,
                \`tipo\` varchar(50) NOT NULL,
                \`condicion\` text NULL,
                \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id_logro\`)
            ) ENGINE=InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`voluntario_logro\` (
                \`id_voluntario_logro\` int NOT NULL AUTO_INCREMENT,
                \`id_voluntario\` int NOT NULL,
                \`id_logro\` int NOT NULL,
                \`fecha_obtenido\` date NOT NULL,
                \`proyecto_relacionado\` int NULL,
                \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id_voluntario_logro\`),
                KEY \`FK_voluntario_logro_voluntario\` (\`id_voluntario\`),
                KEY \`FK_voluntario_logro_logro\` (\`id_logro\`),
                KEY \`FK_voluntario_logro_proyecto\` (\`proyecto_relacionado\`),
                CONSTRAINT \`FK_voluntario_logro_voluntario\` FOREIGN KEY (\`id_voluntario\`) REFERENCES \`voluntario\` (\`id_voluntario\`) ON DELETE CASCADE,
                CONSTRAINT \`FK_voluntario_logro_logro\` FOREIGN KEY (\`id_logro\`) REFERENCES \`logro\` (\`id_logro\`) ON DELETE CASCADE,
                CONSTRAINT \`FK_voluntario_logro_proyecto\` FOREIGN KEY (\`proyecto_relacionado\`) REFERENCES \`proyecto\` (\`id_proyecto\`) ON DELETE SET NULL
            ) ENGINE=InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`certificado\` (
                \`id_certificado\` int NOT NULL AUTO_INCREMENT,
                \`id_voluntario\` int NOT NULL,
                \`id_proyecto\` int NULL,
                \`nombre\` varchar(100) NOT NULL,
                \`descripcion\` text NOT NULL,
                \`tipo\` varchar(50) NOT NULL,
                \`fecha_emision\` date NOT NULL,
                \`fecha_expiracion\` date NULL,
                \`codigo_verificacion\` varchar(50) NOT NULL,
                \`archivo_pdf\` varchar(255) NULL,
                \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id_certificado\`),
                UNIQUE KEY \`UQ_certificado_codigo\` (\`codigo_verificacion\`),
                KEY \`FK_certificado_voluntario\` (\`id_voluntario\`),
                KEY \`FK_certificado_proyecto\` (\`id_proyecto\`),
                CONSTRAINT \`FK_certificado_voluntario\` FOREIGN KEY (\`id_voluntario\`) REFERENCES \`voluntario\` (\`id_voluntario\`) ON DELETE CASCADE,
                CONSTRAINT \`FK_certificado_proyecto\` FOREIGN KEY (\`id_proyecto\`) REFERENCES \`proyecto\` (\`id_proyecto\`) ON DELETE SET NULL
            ) ENGINE=InnoDB
        `);
        await queryRunner.query(`CREATE INDEX \`idx_horas_voluntario_fecha\` ON \`horas_voluntariadas\` (\`id_voluntario\`, \`fecha\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_horas_proyecto_fecha\` ON \`horas_voluntariadas\` (\`id_proyecto\`, \`fecha\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_reporte_proyecto_estado\` ON \`reporte\` (\`id_proyecto\`, \`estado\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_certificado_voluntario_fecha\` ON \`certificado\` (\`id_voluntario\`, \`fecha_emision\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_logro_voluntario_fecha\` ON \`voluntario_logro\` (\`id_voluntario\`, \`fecha_obtenido\`)`);
        await queryRunner.query(`CREATE INDEX \`idx_proyecto_publico_estado\` ON \`proyecto\` (\`es_publico\`, \`id_estado\`)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`idx_proyecto_publico_estado\` ON \`proyecto\``);
        await queryRunner.query(`DROP INDEX \`idx_logro_voluntario_fecha\` ON \`voluntario_logro\``);
        await queryRunner.query(`DROP INDEX \`idx_certificado_voluntario_fecha\` ON \`certificado\``);
        await queryRunner.query(`DROP INDEX \`idx_reporte_proyecto_estado\` ON \`reporte\``);
        await queryRunner.query(`DROP INDEX \`idx_horas_proyecto_fecha\` ON \`horas_voluntariadas\``);
        await queryRunner.query(`DROP INDEX \`idx_horas_voluntario_fecha\` ON \`horas_voluntariadas\``);
        await queryRunner.query(`DROP TABLE \`certificado\``);
        await queryRunner.query(`DROP TABLE \`voluntario_logro\``);
        await queryRunner.query(`DROP TABLE \`logro\``);
        await queryRunner.query(`DROP TABLE \`horas_voluntariadas\``);
        await queryRunner.query(`DROP TABLE \`integracion\``);
        await queryRunner.query(`DROP TABLE \`configuracion_seguridad\``);
        await queryRunner.query(`DROP TABLE \`preferencia_usuario\``);
        await queryRunner.query(`ALTER TABLE \`archivo\` DROP COLUMN \`creado_en\``);
        await queryRunner.query(`ALTER TABLE \`reporte\` DROP COLUMN \`actualizado_en\``);
        await queryRunner.query(`ALTER TABLE \`reporte\` DROP COLUMN \`creado_en\``);
        await queryRunner.query(`ALTER TABLE \`reporte\` DROP COLUMN \`descargas\``);
        await queryRunner.query(`ALTER TABLE \`reporte\` DROP COLUMN \`incluir_graficos\``);
        await queryRunner.query(`ALTER TABLE \`reporte\` DROP COLUMN \`estado\``);
        await queryRunner.query(`ALTER TABLE \`reporte\` DROP COLUMN \`formato\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`es_publico\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`categoria\``);
        await queryRunner.query(`ALTER TABLE \`organizacion\` DROP COLUMN \`tema\``);
        await queryRunner.query(`ALTER TABLE \`organizacion\` DROP COLUMN \`color_secundario\``);
        await queryRunner.query(`ALTER TABLE \`organizacion\` DROP COLUMN \`color_primario\``);
        await queryRunner.query(`ALTER TABLE \`organizacion\` DROP COLUMN \`logo\``);
        await queryRunner.query(`ALTER TABLE \`organizacion\` DROP COLUMN \`descripcion\``);
        await queryRunner.query(`ALTER TABLE \`organizacion\` DROP COLUMN \`nombre_corto\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`telefono\``);
    }
}
exports.AddNewTablesAndFields1760888000000 = AddNewTablesAndFields1760888000000;
//# sourceMappingURL=1760888000000-AddNewTablesAndFields.js.map