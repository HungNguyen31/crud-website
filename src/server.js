import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// setup view engine
configViewEngine(app);
// init web route
initWebRoute(app);

// app.get("/", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
