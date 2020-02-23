import * as path from 'path';
import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import * as express from 'express';
import connectMySQL from './db/mysql';
import * as bodyParser from 'body-parser';

connectMySQL();

const app = express();

useExpressServer(app, {
    controllers: [__dirname + '/controllers/**/*{.js,.ts}'],
});

app.use(express.static(path.join(__dirname, '../../public')));
app.use(bodyParser.json()); // application/json
app.use(bodyParser.urlencoded({ extended: true })); // application/x-www-form-urlencoded

export default app;
