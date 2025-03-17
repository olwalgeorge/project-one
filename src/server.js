// src/server.js
const app = require("./app");
const config = require("./config/config");

app.listen(config.port, () => {
  console.log(`Server listening at http://localhost:${config.port}`);
});
