"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [path.join(process.cwd(), 'dist', '**', '*.entity{.ts,.js}')],
    migrations: [path.join(process.cwd(), 'dist', 'migration', '**', '*.js')],
    synchronize: false,
    logging: true,
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map