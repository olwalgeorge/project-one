// src/controllers/contacts.controller.js
const contactsService = require("../services/contacts.service");
const response = require("../utils/response");

const createContact = async (req, res) => {
  try {
    await contactsService.createContact(req.body);
    response.success(res, 201, "Contact created successfully");
  } catch (error) {
    response.error(res, 500, "Failed to create contact", error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactsService.getAllContacts();
    response.success(res, 200, "Contacts retrieved", contacts);
  } catch (error) {
    response.error(res, 500, "Failed to retrieve contacts", error);
  }
};

const getContactById = async (req, res) => {
  try {
    const contact = await contactsService.getContactById(req.params.contactId);
    if (!contact) {
      return response.error(res, 404, "Contact not found");
    }
    response.success(res, 200, "Contact retrieved", contact);
  } catch (error) {
    response.error(res, 500, "Failed to retrieve contact", error);
  }
};

// Pacth Contact
const updateContact = async (req, res) => {
  try {
    const updatedContact = await contactsService.updateContact(
      req.params.contactId,
      req.body
    );
    if (!updatedContact) {
      return response.error(res, 404, "Contact not found");
    }
    response.success(res, 200, "Contact updated", updatedContact);
  } catch (error) {
    response.error(res, 500, "Failed to update contact", error);
  }
};

// Put contact
const replaceContact = async (req, res) => {
  try {
    const updatedContact = await contactsService.replaceContact(
      req.params.contactId,
      req.body
    );
    if (!updatedContact) {
      return response.error(res, 404, "Contact not found");
    }
    response.success(res, 200, "Contact updated", updatedContact);
  } catch (error) {
    response.error(res, 500, "Failed to update contact", error);
  }
};

const deleteContact = async (req, res) => {
  try {
    await contactsService.deleteContact(req.params.contactId);
    response.success(res, 200, "Contact deleted successfully");
  } catch (error) {
    response.error(res, 500, "Failed to delete contact", error);
  }
};

const deleteAllContacts = async (req, res) => {
  try {
    await contactsService.deleteAllContacts();
    response.success(res, 200, "All contacts deleted successfully");
  } catch (error) {
    response.error(res, 500, "Failed to delete all contacts", error);
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  replaceContact,
  deleteContact,
  deleteAllContacts,
};
