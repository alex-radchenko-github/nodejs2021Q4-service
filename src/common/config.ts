const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../../.env')
});


const PORT = Number(process.env.PORT)
const LL = Number(process.env.LOG_LEVEL)
const {NODE_ENV} = process.env;


// module.exports = {
//   PORT: process.env.PORT,
//   NODE_ENV: process.env.NODE_ENV,
//   MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
//   JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
//   AUTH_MODE: process.env.AUTH_MODE === 'true',
// };


export {PORT, NODE_ENV, LL};