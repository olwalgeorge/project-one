// swagger.js
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "API Documentation",
  },
  host: "https://cse341-w02-project-1.onrender.com", // 

  schemes: ["https"], 
  tags: [], // optional
};

const outputFile = "../../swagger_output.json"; // Generated Swagger file
const endpointsFiles = ["../routes/index.js"]; // Paths to routes

// Generate Swagger file on startup
swaggerAutogen(outputFile, endpointsFiles, doc);
