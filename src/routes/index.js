const routes = require("express").Router();
const contactRoutes = require("./contacts.routes");

routes.get("/", (req, res) => {
  res.send("<h1>Welcome to the Rest API Home Page</h1>");
});

routes.use("/contacts", contactRoutes);

module.exports = routes;
