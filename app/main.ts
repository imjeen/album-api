import "reflect-metadata";
import * as express from "express";
import connectMySQL from "./db/mysql";
import * as photoRouter from "./routers/photoRouter";
import * as albumRouter from "./routers/albumRouter";
import * as path from "path";

connectMySQL();

const bodyParser = require("body-parser");
const app = express();
var multipart = require("connect-multiparty");
var multiparty = multipart({
    uploadDir: path.join(__dirname, "../../public/uploads")
});

app.use(express.static(path.join(__dirname, "../../public")));
app.use(bodyParser.json()); // 支持解析 application/json
app.use(bodyParser.urlencoded({ extended: true })); // 支持解析 application/x-www-form-urlencoded

app.use("/album", albumRouter);
app.use("/photo", photoRouter);
app.post("/upload", multiparty, function(req, res, next) {
    console.log(req.files);
    res.json(req.files);
});

export default app;
