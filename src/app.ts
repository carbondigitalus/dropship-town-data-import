// Core Modules
import { Readable } from 'stream';

// NPM Modules
const axios = require('axios').default;
const csv = require('csvtojson');
const dotenv = require('dotenv');
const tsDBConnect = require('typeorm');
require('reflect-metadata');

// local file imports
import { DropshipTownCSV } from './db/entity';

// Enable Config File
dotenv.config({
    path: './config.env'
});

let DropshipTownCSV: any;

const saveData = (json: any) => {
    return new Promise((resolve, reject) => {
        const bangla = DropshipTownCSV.create({
            productName: json['Product Name'],
            sku: json['SKU'],
            upc: json['UPC'],
            priceBangalla: json['Bangalla'],
            priceWholesale: json['Wholesale'],
            priceGold: json['Gold'],
            manufacturer: json['MANUFACTURER'],
            category: json['CATEGORY'],
            descriptionShort: json['SHORT'],
            descriptionLong: json['DESCRIPTION'],
            weight: json['WEIGHT'],
            imageURL: json['IMAGE NAME'],
            packSize: json['Pack Size'],
            inventory: json['Inventory'],
            priceMAP: json['MAP'],
            thirdPartyRestrictions: json['Third Party Restriction'],
            priceT3: json['T3'],
            priceT4: json['T4'],
            priceT5: json['T5'],
            priceT6: json['T6'],
            priceT7: json['T7'],
            priceT8: json['T8'],
            bSKU: json['BSKU']
        });

        try {
            resolve(DropshipTownCSV.save(bangla));
        } catch (error) {
            reject(error);
        }
    });
};

const connectDatabase = async () => {
    try {
        // Connect to MySQL DB
        // const connection =
        const connection = await tsDBConnect.createConnection({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            logging: true,
            entities: [DropshipTownCSV],
            synchronize: true
        });

        DropshipTownCSV = connection.getRepository(DropshipTownCSV);

        // here you can start to work with your entities
        console.log('MySQL Database Connection Status: success');

        const { data } = await axios.get(
            'https://www.dropshiptown.com/api/products.csv'
        );

        console.log(
            'Successfully read data from https://www.dropshiptown.com/api/products.csv'
        );

        csv()
            .fromStream(Readable.from(data))
            .subscribe(
                (json: any) => saveData(json),
                (err: Error) => console.error(err.message)
            )

    } catch (error) {
        console.log('Error in Reading File ' + error);
    }
};

connectDatabase();
