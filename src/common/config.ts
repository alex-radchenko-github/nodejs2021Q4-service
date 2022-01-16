const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../../.env')
});


const PORT = Number(process.env.PORT)
const {NODE_ENV} = process.env;
const PGHOST = process.env.POSTGRES_HOST
const PGPORT = Number(process.env.POSTGRES_PORT)
const PGUSER = process.env.POSTGRES_USER
const PGPASSWORD = process.env.POSTGRES_PASSWORD
const PGDNNAME = process.env.POSTGRES_DB
const SYNCHRONIZEMODE = Boolean(process.env.SYNCHRONIZE_MODE)
const LOGGINGMODE = Boolean(process.env.LOGGING_MODE)


// module.exports = {
//   PORT: process.env.PORT,
//   NODE_ENV: process.env.NODE_ENV,
//   MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
//   JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
//   AUTH_MODE: process.env.AUTH_MODE === 'true',
// };


export {PORT, NODE_ENV, PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDNNAME, SYNCHRONIZEMODE, LOGGINGMODE};