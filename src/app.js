// src/app.js
const express = require("express");
const routes = require("./routes");
const connectDB = require("./config/database");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");

const app = express();

app.use(express.json());

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

connectDB();

module.exports = app;
