require("dotenv").config();
const express = require("express");

//Ask Aram how did below two lineas appeared
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

app.use("/places", require("/controllers/places"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get(
  "*",
  (req,
  (res) => {
    res.status(404).send("<h1>404 Error Page</h1>");
  })
);

app.listen(process.env.PORT);
