// import * as path from "path";
import app from "./app/main";

const SERVER = {
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 7000
};

app.listen(SERVER.PORT, () => {
    console.info(`
        ##################
        # ==> The server is running.
        # ==> Link: http://${SERVER.HOST}:${SERVER.PORT}
        # ==> REST: http://${SERVER.HOST}:${SERVER.PORT}/api
        ##################
    `);
});

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});
