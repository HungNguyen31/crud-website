const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Main Screeen");
});

app.get("/about", (req, res) => {
  res.send("Hung Nguyen");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
