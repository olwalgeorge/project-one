const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API documentation for the Contacts service",
  },
  host: `${process.env.HOSTNAME || "localhost"}:${process.env.PORT || 3000}`,
  schemes: ["http"],
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
