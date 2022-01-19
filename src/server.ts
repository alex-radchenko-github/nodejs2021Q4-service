import {createConnection} from "typeorm";

import "reflect-metadata";

import {PORT} from './common/config';

require('dotenv').config()

const application = require('./app.ts');

createConnection()
    .then(async (connection) => {
        await connection.runMigrations();

        // start server
        application.listen(PORT, '0.0.0.0', () => application.log.info(`App is running on http://localhost:${PORT}`));
    })
    .catch((error) => application.log.error(error));


// const start = async () => {
//     await createConnection(
//         {
//         type: "postgres",
//         host: PGHOST,
//         port: PGPORT,
//         username: PGUSER,
//         password: PGPASSWORD,
//         database: PGDNNAME,
//         synchronize: false,
//         logging: false,
//         entities: ["src/entity/**/*.ts"],
//         migrations: ["src/migration/**/*.ts"],
//         subscribers: ["src/subscriber/**/*.ts"],
//         cli: {
//             entitiesDir: "src/entity",
//             migrationsDir: "src/migration",
//             subscribersDir: "src/subscriber"
//         }
//
//     }).then(async (connection) => {
//         await connection.runMigrations();;
//
//     application.listen(PORT, '0.0.0.0', () =>
//         application.log.info(`App is running on http://localhost:${PORT}`)
//     );
// }
// start()