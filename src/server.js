import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRouter from "./route/api";
import cookieParser from "cookie-parser";
import express_session from "express-session";
import connect_flash from "connect-flash";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  express_session({
    secret: "huen555",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000,
    },
  })
);
app.use(connect_flash());

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

// init api route
initAPIRouter(app);

// app.get("/", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
