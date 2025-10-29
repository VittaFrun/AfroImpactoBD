import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateVoluntarioFields1760808357773 implements MigrationInterface {
    name = 'UpdateVoluntarioFields1760808357773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Make id_jornada nullable
        await queryRunner.query(`ALTER TABLE \`voluntario\` MODIFY COLUMN \`id_jornada\` int NULL`);
        
        // Make id_estado nullable
        await queryRunner.query(`ALTER TABLE \`voluntario\` MODIFY COLUMN \`id_estado\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert id_jornada to not nullable
        await queryRunner.query(`ALTER TABLE \`voluntario\` MODIFY COLUMN \`id_jornada\` int NOT NULL`);
        
        // Revert id_estado to not nullable
        await queryRunner.query(`ALTER TABLE \`voluntario\` MODIFY COLUMN \`id_estado\` int NOT NULL`);
    }
}
