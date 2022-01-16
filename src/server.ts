import {createConnection} from "typeorm";



// import "reflect-metadata";

import {PORT} from './common/config';

require('dotenv').config()

const application = require('./app.ts');

const start = async () => {
    // const connection
    await createConnection({
        type: "postgres",
        host: "postgres",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "nodejs2021Q4Service",
        entities: ["src/entity/*.ts"],
        migrations: ["src/migration/**/*.ts"],
        synchronize: true,
        logging: false
    });

    application.listen(PORT, '0.0.0.0', () =>
        application.log.info(`App is running on http://localhost:${PORT}`)
    );
}
start()