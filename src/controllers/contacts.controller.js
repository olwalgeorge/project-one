// src/controllers/contacts.controller.js
const contactsService = require("../services/contacts.service");
const response = require("../utils/response");

const createContact = async (req, res) => {
  /* #swagger.tags = ['Contacts'] */
  /* #swagger.description = 'Endpoint to create a new contact' */
  /* #swagger.parameters['body'] = {
      in: 'body',
      description: 'Contact data',
      required: true,
      schema: {
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
    } */
  /* #swagger.responses[201] = { description: 'Contact created successfully' } */
  /* #swagger.responses[500] = { description: 'Failed to create contact' } */
  try {
    await contactsService.createContact(req.body);
    response.success(res, 201, "Contact created successfully");
  } catch (error) {
    response.error(
      res,
      500,
      "Failed to create contact: " + error.message,
      error
    );
  }
};

const getAllContacts = async (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint to retrieve all contacts'
  // #swagger.responses[200] = { description: 'Contacts retrieved successfully' }
  // #swagger.responses[500] = { description: 'Failed to retrieve contacts' }
  try {
    const contacts = await contactsService.getAllContacts();
    response.success(res, 200, "Contacts retrieved successfully", contacts);
  } catch (error) {
    response.error(
      res,
      500,
      "Failed to retrieve contacts: " + error.message,
      error
    );
  }
};

const getContactById = async (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint to retrieve a contact by ID'
  // #swagger.responses[200] = { description: 'Contact retrieved successfully' }
  // #swagger.responses[404] = { description: 'Contact not found' }
  // #swagger.responses[500] = { description: 'Failed to retrieve contact' }
  try {
    const contact = await contactsService.getContactById(req.params.contactId);
    if (!contact) {
      return response.error(res, 404, "Contact not found");
    }
    response.success(res, 200, "Contact retrieved successfully", contact);
  } catch (error) {
    response.error(
      res,
      500,
      "Failed to retrieve contact: " + error.message,
      error
    );
  }
};

const updateContact = async (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint to update a contact'
  // #swagger.responses[200] = { description: 'Contact patched successfully' }
  // #swagger.responses[404] = { description: 'Contact not found' }
  // #swagger.responses[500] = { description: 'Failed to update contact' }
  try {
    const updatedContact = await contactsService.updateContact(
      req.params.contactId,
      req.body
    );
    if (!updatedContact) {
      return response.error(res, 404, "Contact not found");
    }
    response.success(res, 200, "Contact patched successfully", updatedContact);
  } catch (error) {
    response.error(
      res,
      500,
      "Failed to update contact: " + error.message,
      error
    );
  }
};

const replaceContact = async (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint to replace a contact'
  // #swagger.responses[200] = { description: 'Contact replaced successfully' }
  // #swagger.responses[404] = { description: 'Contact not found' }
  // #swagger.responses[500] = { description: 'Failed to replace contact' }
  try {
    const updatedContact = await contactsService.replaceContact(
      req.params.contactId,
      req.body
    );
    if (!updatedContact) {
      return response.error(res, 404, "Contact not found");
    }
    response.success(res, 200, "Contact replaced successfully", updatedContact);
  } catch (error) {
    response.error(
      res,
      500,
      "Failed to replace contact: " + error.message,
      error
    );
  }
};

const deleteContact = async (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint to delete a contact'
  // #swagger.responses[200] = { description: 'Contact deleted successfully' }
  // #swagger.responses[404] = { description: 'Contact not found' }
  // #swagger.responses[500] = { description: 'Failed to delete contact' }
  try {
    await contactsService.deleteContact(req.params.contactId);
    response.success(res, 200, "Contact deleted successfully");
  } catch (error) {
    response.error(
      res,
      500,
      "Failed to delete contact: " + error.message,
      error
    );
  }
};

const deleteAllContacts = async (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint to delete all contacts'
  // #swagger.responses[200] = { description: 'All contacts deleted successfully' }
  // #swagger.responses[500] = { description: 'Failed to delete all contacts' }
  try {
    await contactsService.deleteAllContacts();
    response.success(res, 200, "All contacts deleted successfully");
  } catch (error) {
    response.error(
      res,
      500,
      "Failed to delete all contacts: " + error.message,
      error
    );
  }
};

const getDevelopers = async (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint to retrieve all developers'
  // #swagger.responses[200] = { description: 'All developers listed successfully' }
  // #swagger.responses[404] = { description: 'Developers not found' }
  // #swagger.responses[500] = { description: 'Failed to retrieve developers' }
  try {
    const developers = await contactsService.getDevelopers();
    if (!developers || developers.length === 0) {
      return response.error(res, 404, "Developers not found");
    }
    response.success(
      res,
      200,
      "All developers listed successfully",
      developers
    );
  } catch (error) {
    response.error(
      res,
      500,
      "Failed to retrieve developers: " + error.message,
      error
    );
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
