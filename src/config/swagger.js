// swagger.js
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "API Documentation",
  },
  host: "localhost", // Base URL

  schemes: ["http"],
  tags: [
    {
      name: "Contacts",
      description: "API endpoints for managing contacts",
    },
  ],
};

const outputFile = "../../swagger_output.json"; // Generated Swagger file
const endpointsFiles = ["../routes/index.js"]; // Paths to routes

// Generate Swagger file on startup the run server
swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => {
    require("../server");
  })
  .catch((error) => {
    console.error("Error generating Swagger documentation:", error);
  });
