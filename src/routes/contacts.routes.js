// Contact Routes
// This module sets up contact-related routes for the API
const express = require("express");
const routes = express.Router();
const {
  createContact,
  getAllContacts,
  getDevelopers,
  getContactById,
  updateContact,
  replaceContact,
  deleteContact,
  deleteAllContacts,
} = require("../controllers/contacts.controller");

/* #swagger.tags = ['Contacts'] */
/* #swagger.description = 'Routes for managing contacts' */

routes
  .post("/", createContact)
  .get("/", getAllContacts)
  .get("/developer", getDevelopers)
  .get("/:contactId", getContactById)
  .patch("/:contactId", updateContact)
  .put("/:contactId", replaceContact)
  .delete("/:contactId", deleteContact)
  .delete("/", deleteAllContacts);

module.exports = routes;
