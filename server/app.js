const express = require("express");
const app = express();
const cors = require("cors");

//errors middleware

app.use(express.json());
app.use(cors());

//write Api data to JSON file

module.exports = app;
