

/**
 * This is the main routes module. It handles the root path and
 * delegates the contacts routes to the contacts routes module.
 *
 * @module routes
 * @requires express
 * @requires ./contacts.routes
 */

const routes = require("express").Router();
const contactRoutes = require("./contacts.routes");

/**
 * Handles the root path
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
routes.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the Rest API Home Page</h1><p><a href='/api-docs'>Documentation</a></p>"
  );
});

/**
 * Handles the contacts routes
 * @function
 * @param {String} path - The path to mount the contacts routes module
 */
routes.use("/contacts", contactRoutes);

/** Exports the routes module */
module.exports = routes;
