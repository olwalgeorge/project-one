// swagger.js
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API documentation for the Contacts service',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  definitions: {
    Contact: {
      type: 'object',
      properties: {
        contact_id: { type: 'number', required: true },
        username: { type: 'string', required: true },
        email: { type: 'string', required: true },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        birthday: { type: 'string', format: 'date' },
        role: { type: 'string', enum: ['Developer', 'Designer', 'Administrator', 'Tester', 'Analyst'], default: 'Developer' },
        favorite_color: { type: 'string' },
        projects: { type: 'array', items: { type: 'string' } },
        active: { type: 'boolean' },
        joined_date: { type: 'string', format: 'date' },
        last_login_ip: { type: 'string' }
      }
    }
  }
};

const outputFile = "../../swagger_output.json"; // Generated Swagger file
const endpointsFiles = ["../routes/index.js"]; // Paths to routes

// Generate Swagger file on startup then run server
swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => require("../server"))
  .catch((error) => {
    console.error("Error generating Swagger documentation:", error);
  });
