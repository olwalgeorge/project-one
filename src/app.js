// src/app.js
const express = require("express");
const connectDB = require("./config/database");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");

const app = express();

app.use(express.json());

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

connectDB();

app.use(routes);

module.exports = app;
