import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdateVoluntarioFields1760808357773 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
