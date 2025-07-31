"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTimeToProjectDates1753914885196 = void 0;
class AddTimeToProjectDates1753914885196 {
    constructor() {
        this.name = 'AddTimeToProjectDates1753914885196';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fecha_inicio\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fecha_inicio\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fecha_fin\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fecha_fin\` datetime NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_1d9e5be3d74310f98e398912d9\` ON \`rol_permiso\` (\`id_rol\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\` (\`id_permiso\`)`);
        await queryRunner.query(`ALTER TABLE \`rol_permiso\` ADD CONSTRAINT \`FK_1d9e5be3d74310f98e398912d94\` FOREIGN KEY (\`id_rol\`) REFERENCES \`rol\`(\`id_rol\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`rol_permiso\` DROP FOREIGN KEY \`FK_1d9e5be3d74310f98e398912d94\``);
        await queryRunner.query(`DROP INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\``);
        await queryRunner.query(`DROP INDEX \`IDX_1d9e5be3d74310f98e398912d9\` ON \`rol_permiso\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fecha_fin\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fecha_fin\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fecha_inicio\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fecha_inicio\` date NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_9c0fd212b970f71bf0a9465c4f\` ON \`rol_permiso\` (\`id_permiso\`)`);
    }
}
exports.AddTimeToProjectDates1753914885196 = AddTimeToProjectDates1753914885196;
//# sourceMappingURL=1753914885196-AddTimeToProjectDates.js.map