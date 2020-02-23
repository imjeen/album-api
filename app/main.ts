import * as path from 'path';
import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import * as express from 'express';
import connectMySQL from './db/mysql';
import * as bodyParser from 'body-parser';
import * as multipart from 'connect-multiparty';

connectMySQL();

const app = express();

useExpressServer(app, {
    controllers: [__dirname + '/controllers/**/*{.js,.ts}'],
});

app.use(express.static(path.join(__dirname, '../../public')));
app.use(bodyParser.json()); // 支持解析 application/json
app.use(bodyParser.urlencoded({ extended: true })); // 支持解析 application/x-www-form-urlencoded
// TODO: post router
const multiparty = multipart({
    uploadDir: path.join(__dirname, '../../public/uploads'),
});
app.post('/upload', multiparty, function(req, res, next) {
    console.log(req.files);
    res.json(req.files);
});

export default app;
