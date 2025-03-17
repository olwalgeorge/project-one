// src/app.js
const express = require("express");
const connectDB = require("./config/database");
const routes = require("./routes");

const app = express();

app.use(express.json());

connectDB();

app.use(routes);

module.exports = app;
