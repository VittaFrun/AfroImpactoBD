import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdateTareaFields1760808357774 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
