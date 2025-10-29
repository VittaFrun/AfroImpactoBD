"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVoluntarioFields1760808357773 = void 0;
class UpdateVoluntarioFields1760808357773 {
    constructor() {
        this.name = 'UpdateVoluntarioFields1760808357773';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`voluntario\` MODIFY COLUMN \`id_jornada\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` MODIFY COLUMN \`id_estado\` int NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`voluntario\` MODIFY COLUMN \`id_jornada\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`voluntario\` MODIFY COLUMN \`id_estado\` int NOT NULL`);
    }
}
exports.UpdateVoluntarioFields1760808357773 = UpdateVoluntarioFields1760808357773;
//# sourceMappingURL=1760808357773-UpdateVoluntarioFields.js.map