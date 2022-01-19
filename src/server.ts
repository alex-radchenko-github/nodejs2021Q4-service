import {createConnection} from "typeorm";

import "reflect-metadata";

import {PORT} from './common/config';

require('dotenv').config()

const application = require('./app.ts');

createConnection()
    .then(async () => {
        // await connection.runMigrations();

        // start server
        application.listen(PORT, '0.0.0.0', () => application.log.info(`App is running on http://localhost:${PORT}`));
    })
    .catch((error) => application.log.error(error));