import { MigrationInterface, QueryRunner } from "typeorm";

export class FixIdRolNullable1756757560460 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuario` CHANGE `id_rol` `id_rol` INT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuario` CHANGE `id_rol` `id_rol` INT NOT NULL");
    }

}
