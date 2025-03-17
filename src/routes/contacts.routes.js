const routes = require("express").Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  deleteAllContacts,
} = require("../controllers/contacts.controller");

routes.post("/", createContact);
routes.get("/:id", getContactById);
routes.get("/", getAllContacts);
routes.put("/:id", updateContact);
routes.delete("/:id", deleteContact);
routes.delete("/", deleteAllContacts);

module.exports = routes;
