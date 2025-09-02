import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SchemaSync1755804694542 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
