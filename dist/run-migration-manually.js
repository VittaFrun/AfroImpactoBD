"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
async function runMigration() {
    try {
        await data_source_1.default.initialize();
        console.log('Data Source has been initialized!');
        const queryRunner = data_source_1.default.createQueryRunner();
        const migration = new (await Promise.resolve().then(() => require('./src/migration/1760888000000-AddNewTablesAndFields'))).AddNewTablesAndFields1760888000000();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await migration.up(queryRunner);
            await queryRunner.commitTransaction();
            console.log('Migration executed successfully!');
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    catch (error) {
        console.error('Error during migration:', error);
    }
    finally {
        await data_source_1.default.destroy();
    }
}
runMigration();
//# sourceMappingURL=run-migration-manually.js.map