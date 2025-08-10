import express from "express"
import path from "path"
import router from "./router"
import routerAdmin from "./router-admin"
import morgan from "morgan" 
import cookieParser from "cookie-parser"
import { MORGAN_FORMAT } from "../src/libs/config"

import session from "express-session"
import ConnectMongoDB from "connect-mongodb-session"
import { T } from "./libs/types/common"

const MongoDBStore = ConnectMongoDB(session)
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions"
})

// Entrance;
const app = express()
// console.log(__dirname) buyerda dir nimaligini bilishimiz mumkin odiygina folderlarni korsatadi
app.use(express.static(path.join(__dirname, "public")))  // Middle ware Pattern -- Design patern ga tegishli 
app.use("/uploads", express.static("./uploads"))
app.use(express.urlencoded({extended: true})) // Middle ware pattern Traditional API requist ni qabul qiladi
app.use(express.json()) //Middle ware pattern--json bolib kelgan requist ni object ga ugirib beradi-yani Rest API bolib requist kelgan Data larni Json ni otqizadi yani ruhsat beradi
app.use(cookieParser())
app.use(morgan(MORGAN_FORMAT))

// Session ;
app.use(session({ 
  secret: String(process.env.SESSION_SECRET),
  cookie: {
    maxAge: 1000 * 60 * 60 * 6 // 10s
  },
  store: store,
  resave: true,
  saveUninitialized: true
}))

app.use(function(req,res, next) {
  const sessionInstance = req.session as T
  res.locals.member = sessionInstance.member
  next()
})

// View;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Routers: 
app.use("/admin", routerAdmin)// BSSR: EJS
app.use("/", router) // SPA: REACT  // rest API    // Middleware - Design Pattern


export default app  // buyerda export bolyapti 