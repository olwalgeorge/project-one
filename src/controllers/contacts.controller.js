const createContact = (req, res) => {
  console.log("Creating contact");
  res.send("Create contact");
};

const getAllContacts = (req, res) => {
  console.log("Getting all contacts");
  res.send("Get all contacts");
};

const getContactById = (req, res) => {
  console.log("Getting contact by id");
  res.send("Get contact by id");
};

const updateContact = (req, res) => {
  console.log("Updating contact");
  res.send("Update contact");
};

const deleteContact = (req, res) => {
  console.log("Deleting contact");
  res.send("Delete contact");
};

const deleteAllContacts = (req, res) => {
  console.log("Deleting all contacts");
  res.send("Delete all contacts");
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  deleteAllContacts,
};
