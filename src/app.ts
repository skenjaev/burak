import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";    

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
const MongoDBstore = ConnectMongoDB(session);
const store = new MongoDBstore({
  uri: String(process.env.MONGO_URL), // string -> String yoki process.env.MONGO_URL || ""
  collection: "sessions",
}); // } yetishmayotgan edi

/** 1-ENTRANCE **/
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import { MORGAN_FORMAT } from "./libs/config"; 

/** 2-SESSIONS **/
app.use( // appendFile.use -> app.use
    session({
        secret: String(process.env.SESSION_SECRET), // string -> String yoki process.env.SESSION_SECRET || "default-secret"
        cookie:{
            maxAge: 1000 * 3600 * 3,  // sessiya muddati 3 soat
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);  

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
app.use("/admin", routerAdmin);  //SSR    // EJS
app.use("/", router);           //SPA   // REACT //middleware design pattern

export default app;