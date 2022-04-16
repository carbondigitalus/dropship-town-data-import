// NPM Modules
const dotenv = require('dotenv');
const tsDBConnect = require('typeorm');
require('reflect-metadata');

// imports
import { BangallaCSVTemplate } from './db/entity';

// Enable Config File
dotenv.config({
    path: './config.env'
});

// Connect to MySQL DB
tsDBConnect
    .createConnection({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        logging: true,
        entities: [BangallaCSVTemplate]
    })
    .then(() => {
        // here you can start to work with your entities
        console.log('MySQL Database Connection Status: success');
    })
    .catch((error: any) => console.log(error));
