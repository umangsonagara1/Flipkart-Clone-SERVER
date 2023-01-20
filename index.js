import express from 'express';
import dotenv  from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import connection from './database/db.js';
import DefaultData from './default.js'; // API
import Router from './routes/route.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Router);

const Port = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);

app.listen(Port, () => console.log(`Server is running successfully on PORT ${Port}`));

DefaultData();

