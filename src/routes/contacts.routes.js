// src/routes/contacts.routes.js
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
const { validateContact } = require("../middlewares/validation.middleware");

/* #swagger.tags = ['Contacts'] */
/* #swagger.description = 'Routes for managing contacts' */

routes.post(
  "/",
  validateContact,
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
  /* #swagger.responses[400] = { description: 'Validation failed', schema: { type: 'object', properties: { message: { type: 'string' }, errors: { type: 'object' } } } } */
  /* #swagger.responses[500] = { description: 'Failed to create contact' } */
  createContact
);

routes.get(
  "/",
  /* #swagger.tags = ['Contacts'] */
  /* #swagger.description = 'Endpoint to retrieve all contacts' */
  /* #swagger.responses[200] = { description: 'Contacts retrieved successfully' } */
  /* #swagger.responses[500] = { description: 'Failed to retrieve contacts' } */
  getAllContacts
);

routes.get(
  "/developer",
  /* #swagger.tags = ['Contacts'] */
  /* #swagger.description = 'Endpoint to retrieve all developers' */
  /* #swagger.responses[200] = { description: 'All developers listed successfully' } */
  /* #swagger.responses[500] = { description: 'Failed to retrieve developers' } */
  getDevelopers
);

routes.get(
  "/:contactId",
  /* #swagger.tags = ['Contacts'] */
  /* #swagger.description = 'Endpoint to retrieve a contact by ID' */
  /* #swagger.parameters['contactId'] = {
    in: 'path',
    description: 'ID of the contact',
    required: true,
    type: 'string'
  } */
  /* #swagger.responses[200] = { description: 'Contact retrieved successfully' } */
  /* #swagger.responses[404] = { description: 'Contact not found' } */
  /* #swagger.responses[500] = { description: 'Failed to retrieve contact' } */
  getContactById
);

routes.patch(
  "/:_id",
  validateContact,
  /* #swagger.tags = ['Contacts'] */
  /* #swagger.description = 'Endpoint to update a contact' */
  /* #swagger.parameters['_id'] = {
    in: 'path',
    description: 'internal ID of the contact',
    required: true,
    type: 'string'
  } */
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Updated contact data',
    required: true,
    schema: {
      type: 'object',
      properties: {
        contact_id: { type: 'number' },
        username: { type: 'string' },
        email: { type: 'string' },
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
  /* #swagger.responses[200] = { description: 'Contact patched successfully' } */
  /* #swagger.responses[400] = { description: 'Validation failed', schema: { type: 'object', properties: { message: { type: 'string' }, errors: { type: 'object' } } } } */
  /* #swagger.responses[404] = { description: 'Contact not found' } */
  /* #swagger.responses[500] = { description: 'Failed to update contact' } */
  updateContact
);

routes.put(
  "/:_id",
  validateContact,
  /* #swagger.tags = ['Contacts'] */
  /* #swagger.description = 'Endpoint to replace a contact' */
  /* #swagger.parameters['_id'] = {
    in: 'path',
    description: 'internal ID of the contact',
    required: true,
    type: 'string'
  } */
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'New contact data',
    required: true,
    schema: {
      type: 'object',
      properties: {
        contact_id: { type: 'number' },
        username: { type: 'string' },
        email: { type: 'string' },
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
  /* #swagger.responses[200] = { description: 'Contact replaced successfully' } */
  /* #swagger.responses[400] = { description: 'Validation failed', schema: { type: 'object', properties: { message: { type: 'string' }, errors: { type: 'object' } } } } */
  /* #swagger.responses[404] = { description: 'Contact not found' } */
  /* #swagger.responses[500] = { description: 'Failed to replace contact' } */
  replaceContact
);

routes.delete(
  "/:_id",
  /* #swagger.tags = ['Contacts'] */
  /* #swagger.description = 'Endpoint to delete a contact' */
  /* #swagger.parameters['_id'] = {
    in: 'path',
    description: 'internal ID of the contact',
    required: true,
    type: 'string'
  } */
  /* #swagger.responses[200] = { description: 'Contact deleted successfully' } */
  /* #swagger.responses[404] = { description: 'Contact not found' } */
  /* #swagger.responses[500] = { description: 'Failed to delete contact' } */
  deleteContact
);

routes.delete(
  "/",
  /* #swagger.tags = ['Contacts'] */
  /* #swagger.description = 'Endpoint to delete all contacts' */
  /* #swagger.responses[200] = { description: 'All contacts deleted successfully' } */
  /* #swagger.responses[500] = { description: 'Failed to delete all contacts' } */
  deleteAllContacts
);

module.exports = routes;
