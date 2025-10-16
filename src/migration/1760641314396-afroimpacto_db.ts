import { MigrationInterface, QueryRunner } from "typeorm";

export class AfroimpactoDb1760641314396 implements MigrationInterface {
    name = 'AfroimpactoDb1760641314396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`permiso\` (\`id_permiso\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` text NOT NULL, PRIMARY KEY (\`id_permiso\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rol\` (\`id_rol\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` varchar(255) NOT NULL, PRIMARY KEY (\`id_rol\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`asignacion\` (\`id_asignacion\` int NOT NULL AUTO_INCREMENT, \`id_tarea\` int NOT NULL, \`id_voluntario\` int NOT NULL, \`rol_asignado\` varchar(100) NOT NULL, PRIMARY KEY (\`id_asignacion\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`movimiento\` (\`id_movimiento\` int NOT NULL AUTO_INCREMENT, \`tipo\` varchar(50) NOT NULL, \`descripcion\` text NOT NULL, \`cantidad\` int NOT NULL, \`monto\` decimal(12,2) NOT NULL, \`fecha\` date NOT NULL, \`comprobante\` varchar(255) NULL, \`id_proyecto\` int NOT NULL, \`id_tarea\` int NULL, \`id_donacion\` int NULL, PRIMARY KEY (\`id_movimiento\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tarea\` (\`id_tarea\` int NOT NULL AUTO_INCREMENT, \`descripcion\` text NOT NULL, \`fecha_inicio\` date NOT NULL, \`fecha_fin\` date NOT NULL, \`prioridad\` enum ('Alta', 'Media', 'Baja') NOT NULL, \`complejidad\` varchar(100) NOT NULL, \`id_estado\` int NOT NULL, \`id_fase\` int NOT NULL, PRIMARY KEY (\`id_tarea\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fase\` (\`id_fase\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` text NOT NULL, \`orden\` int NOT NULL, \`id_proyecto\` int NOT NULL, PRIMARY KEY (\`id_fase\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`donacion_proyecto\` (\`id_donacion_proyecto\` int NOT NULL AUTO_INCREMENT, \`id_donacion\` int NOT NULL, \`id_proyecto\` int NOT NULL, \`monto_asignado\` decimal(12,2) NOT NULL, PRIMARY KEY (\`id_donacion_proyecto\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`reporte\` (\`id_reporte\` int NOT NULL AUTO_INCREMENT, \`tipo\` varchar(50) NOT NULL, \`fecha\` date NOT NULL, \`contenido\` text NOT NULL, \`id_proyecto\` int NOT NULL, PRIMARY KEY (\`id_reporte\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`evaluacion\` (\`id_evaluacion\` int NOT NULL AUTO_INCREMENT, \`id_voluntario\` int NOT NULL, \`id_proyecto\` int NOT NULL, \`puntuacion\` int NOT NULL, \`comentario\` text NOT NULL, \`fecha\` date NOT NULL, PRIMARY KEY (\`id_evaluacion\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`proyecto\` (\`id_proyecto\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` text NOT NULL, \`objetivo\` text NOT NULL, \`ubicacion\` varchar(100) NOT NULL, \`fecha_inicio\` date NOT NULL, \`fecha_fin\` date NOT NULL, \`imagen_principal\` varchar(255) NULL, \`documento\` varchar(255) NULL, \`id_estado\` int NOT NULL, \`id_organizacion\` int NOT NULL, \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id_proyecto\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`estado\` (\`id_estado\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(50) NOT NULL, PRIMARY KEY (\`id_estado\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`metodopago\` (\`id_metodo\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` text NOT NULL, PRIMARY KEY (\`id_metodo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`donacion\` (\`id_donacion\` int NOT NULL AUTO_INCREMENT, \`id_organizacion\` int NOT NULL, \`id_metodo\` int NOT NULL, \`monto_total\` decimal(12,2) NOT NULL, \`fecha\` date NOT NULL, \`condiciones\` text NOT NULL, \`verificado\` tinyint NOT NULL DEFAULT 0, \`id_estado\` int NOT NULL, PRIMARY KEY (\`id_donacion\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`organizacion\` (\`id_organizacion\` int NOT NULL AUTO_INCREMENT, \`id_usuario\` int NOT NULL, \`nombre\` varchar(100) NOT NULL, \`tipo\` varchar(50) NOT NULL, \`sitio_web\` varchar(255) NOT NULL, \`pais\` varchar(100) NOT NULL, \`ciudad\` varchar(100) NOT NULL, \`areas_enfoque\` text NOT NULL, \`mision_vision\` text NOT NULL, \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`REL_a434fef9deb7d92b1120e93cde\` (\`id_usuario\`), PRIMARY KEY (\`id_organizacion\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`password\` varchar(255) NOT NULL, \`id_rol\` int NULL, \`tipo_usuario\` varchar(50) NOT NULL, \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_2863682842e688ca198eb25c12\` (\`email\`), PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`jornada\` (\`id_jornada\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(50) NOT NULL, PRIMARY KEY (\`id_jornada\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`disponibilidad\` (\`id_disponibilidad\` int NOT NULL AUTO_INCREMENT, \`id_voluntario\` int NOT NULL, \`dia_semana\` varchar(20) NOT NULL, \`hora_inicio\` time NOT NULL, \`hora_fin\` time NOT NULL, PRIMARY KEY (\`id_disponibilidad\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`voluntario\` (\`id_voluntario\` int NOT NULL AUTO_INCREMENT, \`id_usuario\` int NOT NULL, \`id_jornada\` int NOT NULL, \`id_estado\` int NOT NULL, \`disponibilidad\` varchar(50) NOT NULL, \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`actualizado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`REL_b9ff2b8aec5d19e99083c75fd3\` (\`id_usuario\`), PRIMARY KEY (\`id_voluntario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`habilidad\` (\`id_habilidad\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` text NOT NULL, PRIMARY KEY (\`id_habilidad\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`voluntario_habilidad\` (\`id_voluntario\` int NOT NULL, \`id_habilidad\` int NOT NULL, \`tiempo_experiencia\` varchar(50) NOT NULL, \`nivel\` enum ('Básico', 'Intermedio', 'Avanzado') NOT NULL, \`verificado\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id_voluntario\`, \`id_habilidad\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rol_permiso\` (\`id_rol\` int NOT NULL, \`id_permiso\` int NOT NULL, PRIMARY KEY (\`id_rol\`, \`id_permiso\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`archivo\` (\`id_archivo\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`ruta\` varchar(255) NOT NULL, \`tipo\` varchar(50) NOT NULL, \`id_referencia\` int NOT NULL, \`tipo_referencia\` varchar(50) NOT NULL, PRIMARY KEY (\`id_archivo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE INDEX \`IDX_1d9e5be3d74310f98e398912d9\` ON \`rol_permiso\` (\`id_rol\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\` (\`id_permiso\`)`);
        await queryRunner.query(`ALTER TABLE \`asignacion\` ADD CONSTRAINT \`FK_080b54e04105cbc5e51f9f12761\` FOREIGN KEY (\`id_tarea\`) REFERENCES \`tarea\`(\`id_tarea\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`asignacion\` ADD CONSTRAINT \`FK_ff6c9d81e95011500e2926e06f9\` FOREIGN KEY (\`id_voluntario\`) REFERENCES \`voluntario\`(\`id_voluntario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movimiento\` ADD CONSTRAINT \`FK_6c9de691fff88546d526c0be721\` FOREIGN KEY (\`id_proyecto\`) REFERENCES \`proyecto\`(\`id_proyecto\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movimiento\` ADD CONSTRAINT \`FK_a2cc74e37019249efd3b9274186\` FOREIGN KEY (\`id_tarea\`) REFERENCES \`tarea\`(\`id_tarea\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movimiento\` ADD CONSTRAINT \`FK_f798af7984d221fbe8b402e0b83\` FOREIGN KEY (\`id_donacion\`) REFERENCES \`donacion\`(\`id_donacion\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tarea\` ADD CONSTRAINT \`FK_48eeaaf81750df62901889574e7\` FOREIGN KEY (\`id_estado\`) REFERENCES \`estado\`(\`id_estado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tarea\` ADD CONSTRAINT \`FK_271445314b408ec9ec3c19d9e66\` FOREIGN KEY (\`id_fase\`) REFERENCES \`fase\`(\`id_fase\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fase\` ADD CONSTRAINT \`FK_6e6cf7e6c950bcb2f99632a20f5\` FOREIGN KEY (\`id_proyecto\`) REFERENCES \`proyecto\`(\`id_proyecto\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`donacion_proyecto\` ADD CONSTRAINT \`FK_d7153b581a96292cfa38cc29b69\` FOREIGN KEY (\`id_donacion\`) REFERENCES \`donacion\`(\`id_donacion\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`donacion_proyecto\` ADD CONSTRAINT \`FK_e8fc3410eb6a8b322569e38c710\` FOREIGN KEY (\`id_proyecto\`) REFERENCES \`proyecto\`(\`id_proyecto\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reporte\` ADD CONSTRAINT \`FK_aca7331dcd0e2cee6e92b29408e\` FOREIGN KEY (\`id_proyecto\`) REFERENCES \`proyecto\`(\`id_proyecto\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`evaluacion\` ADD CONSTRAINT \`FK_7b335b72565eb886d680c6feb37\` FOREIGN KEY (\`id_voluntario\`) REFERENCES \`voluntario\`(\`id_voluntario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`evaluacion\` ADD CONSTRAINT \`FK_4c414d056233bda67d28e860031\` FOREIGN KEY (\`id_proyecto\`) REFERENCES \`proyecto\`(\`id_proyecto\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_5dc5ddea3fd8edda48a6d5e94c1\` FOREIGN KEY (\`id_estado\`) REFERENCES \`estado\`(\`id_estado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_636d20210bb84793000e129881f\` FOREIGN KEY (\`id_organizacion\`) REFERENCES \`organizacion\`(\`id_organizacion\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`donacion\` ADD CONSTRAINT \`FK_95617e4c45e5efa3331b60881e2\` FOREIGN KEY (\`id_organizacion\`) REFERENCES \`organizacion\`(\`id_organizacion\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`donacion\` ADD CONSTRAINT \`FK_981d4a4f7835f640c5181b9909d\` FOREIGN KEY (\`id_metodo\`) REFERENCES \`metodopago\`(\`id_metodo\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`donacion\` ADD CONSTRAINT \`FK_a5bdd9db938385e5caf9c9badde\` FOREIGN KEY (\`id_estado\`) REFERENCES \`estado\`(\`id_estado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`organizacion\` ADD CONSTRAINT \`FK_a434fef9deb7d92b1120e93cde7\` FOREIGN KEY (\`id_usuario\`) REFERENCES \`usuario\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD CONSTRAINT \`FK_3628e9894c4b014d61a01cb21dd\` FOREIGN KEY (\`id_rol\`) REFERENCES \`rol\`(\`id_rol\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`disponibilidad\` ADD CONSTRAINT \`FK_f35e270b26165db42c39b0b2069\` FOREIGN KEY (\`id_voluntario\`) REFERENCES \`voluntario\`(\`id_voluntario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` ADD CONSTRAINT \`FK_b9ff2b8aec5d19e99083c75fd3e\` FOREIGN KEY (\`id_usuario\`) REFERENCES \`usuario\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` ADD CONSTRAINT \`FK_ba654756ea424a96a61b0f6c42b\` FOREIGN KEY (\`id_jornada\`) REFERENCES \`jornada\`(\`id_jornada\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` ADD CONSTRAINT \`FK_40b4a17baae6b4f06b6447f64a7\` FOREIGN KEY (\`id_estado\`) REFERENCES \`estado\`(\`id_estado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`voluntario_habilidad\` ADD CONSTRAINT \`FK_ea071f223de95d33382af5856a5\` FOREIGN KEY (\`id_voluntario\`) REFERENCES \`voluntario\`(\`id_voluntario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`voluntario_habilidad\` ADD CONSTRAINT \`FK_d1817a82c45d7ee2156b5126c2d\` FOREIGN KEY (\`id_habilidad\`) REFERENCES \`habilidad\`(\`id_habilidad\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rol_permiso\` ADD CONSTRAINT \`FK_1d9e5be3d74310f98e398912d94\` FOREIGN KEY (\`id_rol\`) REFERENCES \`rol\`(\`id_rol\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rol_permiso\` ADD CONSTRAINT \`FK_9c0fd212b970f71bf0a9465c4f3\` FOREIGN KEY (\`id_permiso\`) REFERENCES \`permiso\`(\`id_permiso\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rol_permiso\` DROP FOREIGN KEY \`FK_9c0fd212b970f71bf0a9465c4f3\``);
        await queryRunner.query(`ALTER TABLE \`rol_permiso\` DROP FOREIGN KEY \`FK_1d9e5be3d74310f98e398912d94\``);
        await queryRunner.query(`ALTER TABLE \`voluntario_habilidad\` DROP FOREIGN KEY \`FK_d1817a82c45d7ee2156b5126c2d\``);
        await queryRunner.query(`ALTER TABLE \`voluntario_habilidad\` DROP FOREIGN KEY \`FK_ea071f223de95d33382af5856a5\``);
        await queryRunner.query(`ALTER TABLE \`voluntario\` DROP FOREIGN KEY \`FK_40b4a17baae6b4f06b6447f64a7\``);
        await queryRunner.query(`ALTER TABLE \`voluntario\` DROP FOREIGN KEY \`FK_ba654756ea424a96a61b0f6c42b\``);
        await queryRunner.query(`ALTER TABLE \`voluntario\` DROP FOREIGN KEY \`FK_b9ff2b8aec5d19e99083c75fd3e\``);
        await queryRunner.query(`ALTER TABLE \`disponibilidad\` DROP FOREIGN KEY \`FK_f35e270b26165db42c39b0b2069\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP FOREIGN KEY \`FK_3628e9894c4b014d61a01cb21dd\``);
        await queryRunner.query(`ALTER TABLE \`organizacion\` DROP FOREIGN KEY \`FK_a434fef9deb7d92b1120e93cde7\``);
        await queryRunner.query(`ALTER TABLE \`donacion\` DROP FOREIGN KEY \`FK_a5bdd9db938385e5caf9c9badde\``);
        await queryRunner.query(`ALTER TABLE \`donacion\` DROP FOREIGN KEY \`FK_981d4a4f7835f640c5181b9909d\``);
        await queryRunner.query(`ALTER TABLE \`donacion\` DROP FOREIGN KEY \`FK_95617e4c45e5efa3331b60881e2\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_636d20210bb84793000e129881f\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_5dc5ddea3fd8edda48a6d5e94c1\``);
        await queryRunner.query(`ALTER TABLE \`evaluacion\` DROP FOREIGN KEY \`FK_4c414d056233bda67d28e860031\``);
        await queryRunner.query(`ALTER TABLE \`evaluacion\` DROP FOREIGN KEY \`FK_7b335b72565eb886d680c6feb37\``);
        await queryRunner.query(`ALTER TABLE \`reporte\` DROP FOREIGN KEY \`FK_aca7331dcd0e2cee6e92b29408e\``);
        await queryRunner.query(`ALTER TABLE \`donacion_proyecto\` DROP FOREIGN KEY \`FK_e8fc3410eb6a8b322569e38c710\``);
        await queryRunner.query(`ALTER TABLE \`donacion_proyecto\` DROP FOREIGN KEY \`FK_d7153b581a96292cfa38cc29b69\``);
        await queryRunner.query(`ALTER TABLE \`fase\` DROP FOREIGN KEY \`FK_6e6cf7e6c950bcb2f99632a20f5\``);
        await queryRunner.query(`ALTER TABLE \`tarea\` DROP FOREIGN KEY \`FK_271445314b408ec9ec3c19d9e66\``);
        await queryRunner.query(`ALTER TABLE \`tarea\` DROP FOREIGN KEY \`FK_48eeaaf81750df62901889574e7\``);
        await queryRunner.query(`ALTER TABLE \`movimiento\` DROP FOREIGN KEY \`FK_f798af7984d221fbe8b402e0b83\``);
        await queryRunner.query(`ALTER TABLE \`movimiento\` DROP FOREIGN KEY \`FK_a2cc74e37019249efd3b9274186\``);
        await queryRunner.query(`ALTER TABLE \`movimiento\` DROP FOREIGN KEY \`FK_6c9de691fff88546d526c0be721\``);
        await queryRunner.query(`ALTER TABLE \`asignacion\` DROP FOREIGN KEY \`FK_ff6c9d81e95011500e2926e06f9\``);
        await queryRunner.query(`ALTER TABLE \`asignacion\` DROP FOREIGN KEY \`FK_080b54e04105cbc5e51f9f12761\``);
        await queryRunner.query(`DROP INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\``);
        await queryRunner.query(`DROP INDEX \`IDX_1d9e5be3d74310f98e398912d9\` ON \`rol_permiso\``);
        await queryRunner.query(`DROP TABLE \`archivo\``);
        await queryRunner.query(`DROP TABLE \`rol_permiso\``);
        await queryRunner.query(`DROP TABLE \`voluntario_habilidad\``);
        await queryRunner.query(`DROP TABLE \`habilidad\``);
        await queryRunner.query(`DROP INDEX \`REL_b9ff2b8aec5d19e99083c75fd3\` ON \`voluntario\``);
        await queryRunner.query(`DROP TABLE \`voluntario\``);
        await queryRunner.query(`DROP TABLE \`disponibilidad\``);
        await queryRunner.query(`DROP TABLE \`jornada\``);
        await queryRunner.query(`DROP INDEX \`IDX_2863682842e688ca198eb25c12\` ON \`usuario\``);
        await queryRunner.query(`DROP TABLE \`usuario\``);
        await queryRunner.query(`DROP INDEX \`REL_a434fef9deb7d92b1120e93cde\` ON \`organizacion\``);
        await queryRunner.query(`DROP TABLE \`organizacion\``);
        await queryRunner.query(`DROP TABLE \`donacion\``);
        await queryRunner.query(`DROP TABLE \`metodopago\``);
        await queryRunner.query(`DROP TABLE \`estado\``);
        await queryRunner.query(`DROP TABLE \`proyecto\``);
        await queryRunner.query(`DROP TABLE \`evaluacion\``);
        await queryRunner.query(`DROP TABLE \`reporte\``);
        await queryRunner.query(`DROP TABLE \`donacion_proyecto\``);
        await queryRunner.query(`DROP TABLE \`fase\``);
        await queryRunner.query(`DROP TABLE \`tarea\``);
        await queryRunner.query(`DROP TABLE \`movimiento\``);
        await queryRunner.query(`DROP TABLE \`asignacion\``);
        await queryRunner.query(`DROP TABLE \`rol\``);
        await queryRunner.query(`DROP TABLE \`permiso\``);
    }

}
