import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddOrganizacionToProyecto1755118581866 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
