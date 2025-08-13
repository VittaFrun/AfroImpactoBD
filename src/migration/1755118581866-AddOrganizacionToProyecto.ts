import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrganizacionToProyecto1755118581866 implements MigrationInterface {
    name = 'AddOrganizacionToProyecto1755118581866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\``);
        await queryRunner.query(`ALTER TABLE \`organizacion\` DROP COLUMN \`correo_contacto\``);
        await queryRunner.query(`ALTER TABLE \`organizacion\` DROP COLUMN \`telefono\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`activo\``);
        await queryRunner.query(`ALTER TABLE \`voluntario\` DROP COLUMN \`telefono_contacto\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fecha_inicio\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fecha_inicio\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fecha_fin\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fecha_fin\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` DROP FOREIGN KEY \`FK_ba654756ea424a96a61b0f6c42b\``);
        await queryRunner.query(`ALTER TABLE \`voluntario\` DROP FOREIGN KEY \`FK_40b4a17baae6b4f06b6447f64a7\``);
        await queryRunner.query(`ALTER TABLE \`voluntario\` CHANGE \`id_jornada\` \`id_jornada\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` CHANGE \`id_estado\` \`id_estado\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` CHANGE \`disponibilidad\` \`disponibilidad\` varchar(50) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_1d9e5be3d74310f98e398912d9\` ON \`rol_permiso\` (\`id_rol\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\` (\`id_permiso\`)`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` ADD CONSTRAINT \`FK_ba654756ea424a96a61b0f6c42b\` FOREIGN KEY (\`id_jornada\`) REFERENCES \`jornada\`(\`id_jornada\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` ADD CONSTRAINT \`FK_40b4a17baae6b4f06b6447f64a7\` FOREIGN KEY (\`id_estado\`) REFERENCES \`estado\`(\`id_estado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rol_permiso\` ADD CONSTRAINT \`FK_1d9e5be3d74310f98e398912d94\` FOREIGN KEY (\`id_rol\`) REFERENCES \`rol\`(\`id_rol\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rol_permiso\` DROP FOREIGN KEY \`FK_1d9e5be3d74310f98e398912d94\``);
        await queryRunner.query(`ALTER TABLE \`voluntario\` DROP FOREIGN KEY \`FK_40b4a17baae6b4f06b6447f64a7\``);
        await queryRunner.query(`ALTER TABLE \`voluntario\` DROP FOREIGN KEY \`FK_ba654756ea424a96a61b0f6c42b\``);
        await queryRunner.query(`DROP INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\``);
        await queryRunner.query(`DROP INDEX \`IDX_1d9e5be3d74310f98e398912d9\` ON \`rol_permiso\``);
        await queryRunner.query(`ALTER TABLE \`voluntario\` CHANGE \`disponibilidad\` \`disponibilidad\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` CHANGE \`id_estado\` \`id_estado\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` CHANGE \`id_jornada\` \`id_jornada\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` ADD CONSTRAINT \`FK_40b4a17baae6b4f06b6447f64a7\` FOREIGN KEY (\`id_estado\`) REFERENCES \`estado\`(\`id_estado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` ADD CONSTRAINT \`FK_ba654756ea424a96a61b0f6c42b\` FOREIGN KEY (\`id_jornada\`) REFERENCES \`jornada\`(\`id_jornada\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fecha_fin\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fecha_fin\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fecha_inicio\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fecha_inicio\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` ADD \`telefono_contacto\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`activo\` tinyint(1) NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`organizacion\` ADD \`telefono\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`organizacion\` ADD \`correo_contacto\` varchar(100) NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\` (\`id_permiso\`)`);
    }

}
