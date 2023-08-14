import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import mongoose from 'mongoose';
import router from './router';

require('dotenv').config();

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, ()=> {
    console.log('server running on port 8080');
});


const mongo_url = process.env.MONGO_URL;

mongoose.Promise = Promise;
mongoose.connect(mongo_url);
mongoose.connection.on('error',(error: Error) => console.log(error));

app.use('/', router());

