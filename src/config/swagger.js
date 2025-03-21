// swagger.js
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API documentation for the Contacts service",
  },
  host: "cse341-w02-project-1.onrender.com",
  schemes: ["https"],
  tags: [
    {
      name: "Home",
      description: "Welcome page with a link to the API documentation",
    },
    {
      name: "Contacts",
      description: "Endpoints related to contact operations",
    },
  ],
};

const outputFile = "../../swagger_output.json"; // Generated Swagger file
const endpointsFiles = ["../routes/index.js"]; // Paths to routes

// Generate Swagger file on startup then run server
swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => require("../server"))
  .catch((error) => {
    console.error("Error generating Swagger documentation:", error);
  });
