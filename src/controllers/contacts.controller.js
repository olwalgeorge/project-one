const contactsService = require("../services/contacts.service");
const response = require("../utils/response");

const createContact = async (req, res, next) => {
  try {
    await contactsService.createContact(req.body);
    response.success(res, 201, "Contact created successfully");
  } catch (error) {
    if (error.code === 11000) {
      return next({
        name: "MongoServerError",
        code: 11000,
        keyPattern: error.keyPattern,
        keyValue: error.keyValue,
      });
    }
    return next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.getAllContacts();
    response.success(res, 200, "Contacts retrieved successfully", contacts);
  } catch (error) {
    return next(error);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const contact = await contactsService.getContactById(req.params.contactId);
    if (!contact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      return next(error);
    }
    response.success(res, 200, "Contact retrieved successfully", contact);
  } catch (error) {
    return next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const updatedContact = await contactsService.updateContact(
      req.params._id,
      req.body
    );
    if (!updatedContact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      return next(error);
    }
    response.success(res, 200, "Contact updated successfully", updatedContact);
  } catch (error) {
    return next(error);
  }
};

const replaceContact = async (req, res, next) => {
  try {
    const replacedContact = await contactsService.replaceContact(
      req.params._id,
      req.body
    );
    if (!replacedContact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      return next(error);
    }
    response.success(
      res,
      200,
      "Contact replaced successfully",
      replacedContact
    );
  } catch (error) {
    return next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    await contactsService.deleteContact(req.params._id);
    response.success(res, 200, "Contact deleted successfully");
  } catch (error) {
    return next(error);
  }
};

const deleteAllContacts = async (req, res, next) => {
  try {
    await contactsService.deleteAllContacts();
    response.success(res, 200, "All contacts deleted successfully");
  } catch (error) {
    return next(error);
  }
};

const getDevelopers = async (req, res, next) => {
  try {
    const developers = await contactsService.getDevelopers();
    if (!developers || developers.length === 0) {
      const error = new Error("Developers not found");
      error.statusCode = 404;
      return next(error);
    }
    response.success(
      res,
      200,
      "All developers listed successfully",
      developers
    );
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getDevelopers,
  getContactById,
  updateContact,
  replaceContact,
  deleteContact,
  deleteAllContacts,
};
