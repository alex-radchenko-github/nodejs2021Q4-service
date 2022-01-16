import {createConnection} from "typeorm";

import "reflect-metadata";

import {PORT, PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDNNAME, SYNCHRONIZEMODE, LOGGINGMODE} from './common/config';

require('dotenv').config()

const application = require('./app.ts');

const start = async () => {
    await createConnection({
        type: "postgres",
        host: PGHOST,
        port: PGPORT,
        username: PGUSER,
        password: PGPASSWORD,
        database: PGDNNAME,
        entities: ["src/entity/*.ts"],
        migrations: ["src/migration/**/*.ts"],
        synchronize: SYNCHRONIZEMODE,
        logging: LOGGINGMODE
    });

    application.listen(PORT, '0.0.0.0', () =>
        application.log.info(`App is running on http://localhost:${PORT}`)
    );
}
start()