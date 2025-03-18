// swagger.js
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "API Documentation",
  },
  host: "localhost:3000", // Your server URL
  schemes: ["http"], // or ['https'] for production
  tags: [], // Optional: Define tags for grouping endpoints
};

const outputFile = "../../swagger_output.json"; // Generated Swagger file
const endpointsFiles = ["../routes/index.js"]; // Paths to routes

// Generate Swagger file on startup
swaggerAutogen(outputFile, endpointsFiles, doc);
