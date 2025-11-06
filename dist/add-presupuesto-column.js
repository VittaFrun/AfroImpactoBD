"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'afroimpacto_db',
    synchronize: false,
    logging: false,
    entities: ['dist/src/**/*.entity.js'],
    migrations: ['dist/src/migration/**'],
});
async function addPresupuestoColumn() {
    try {
        await AppDataSource.initialize();
        const queryRunner = AppDataSource.createQueryRunner();
        const table = await queryRunner.getTable('proyecto');
        const hasColumn = table === null || table === void 0 ? void 0 : table.findColumnByName('presupuesto_total');
        if (!hasColumn) {
            console.log('Agregando columna presupuesto_total...');
            await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`presupuesto_total\` decimal(12,2) NOT NULL DEFAULT 0`);
            console.log('Columna presupuesto_total agregada exitosamente');
        }
        else {
            console.log('La columna presupuesto_total ya existe');
        }
        await queryRunner.release();
        await AppDataSource.destroy();
    }
    catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}
addPresupuestoColumn();
//# sourceMappingURL=add-presupuesto-column.js.map