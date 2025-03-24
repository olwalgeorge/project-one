// src/routes/swagger/contacts.swagger.js

module.exports = {
  createContact: {
    description: "Create a new contact",
    parameters: [
      {
        in: "body",
        description: "Contact information",
        schema: { $ref: "#/definitions/CreateContact" },
      },
    ],
    responses: {
      201: { description: "Contact created successfully" },
      400: {
        description: "Validation failed",
        schema: { $ref: "#/definitions/ValidationError" },
      },
      409: {
        description: "Contact creation failed due to duplicate key",
        schema: { $ref: "#/definitions/DuplicateKeyError" },
      },
      500: { description: "Failed to create contact" },
    },
  },
  getAllContacts: {
    description: "Retrieve all contacts",
    responses: {
      200: {
        description: "Contacts retrieved successfully",
        schema: { $ref: "#/definitions/Contact" },
      },
      500: { description: "Failed to retrieve contacts" },
    },
  },
  getContactById: {
    description: "Retrieve a contact by id",
    parameters: [
      {
        in: "path",
        name: "contactId",
        description: "ID of the contact to retrieve",
        required: true,
      },
    ],
    responses: {
      200: {
        description: "Contact retrieved successfully",
        schema: { $ref: "#/definitions/Contact" },
      },
      404: { description: "Contact not found" },
      500: { description: "Failed to retrieve contact" },
    },
  },
  updateContact: {
    description: "Update a contact",
    parameters: [
      {
        in: "path",
        name: "_id",
        description: "ID of the contact to update",
        required: true,
      },
      {
        in: "body",
        description: "Contact information to update",
        schema: { $ref: "#/definitions/UpdateContact" },
      },
    ],
    responses: {
      200: {
        description: "Contact updated successfully",
        schema: { $ref: "#/definitions/Contact" },
      },
      404: { description: "Contact not found" },
      400: {
        description: "Validation failed",
        schema: { $ref: "#/definitions/ValidationError" },
      },
      500: { description: "Failed to update contact" },
    },
  },
  replaceContact: {
    description: "Replace a contact",
    parameters: [
      {
        in: "path",
        name: "_id",
        description: "ID of the contact to replace",
        required: true,
      },
      {
        in: "body",
        description: "Contact information to replace",
        schema: { $ref: "#/definitions/ReplaceContact" },
      },
    ],
    responses: {
      200: {
        description: "Contact replaced successfully",
        schema: { $ref: "#/definitions/Contact" },
      },
      404: { description: "Contact not found" },
      400: {
        description: "Validation failed",
        schema: { $ref: "#/definitions/ValidationError" },
      },
      500: { description: "Failed to replace contact" },
    },
  },
  deleteContact: {
    description: "Delete a contact",
    parameters: [
      {
        in: "path",
        name: "_id",
        description: "ID of the contact to delete",
        required: true,
      },
    ],
    responses: {
      200: { description: "Contact deleted successfully" },
      404: { description: "Contact not found" },
      500: { description: "Failed to delete contact" },
    },
  },
  deleteAllContacts: {
    description: "Delete all contacts",
    responses: {
      200: { description: "All contacts deleted successfully" },
      500: { description: "Failed to delete all contacts" },
    },
  },
  getDevelopers: {
    description: "Retrieve all developers",
    responses: {
      200: {
        description: "All developers listed successfully",
        schema: { $ref: "#/definitions/Contact" },
      },
      404: { description: "Developers not found" },
      500: { description: "Failed to retrieve developers" },
    },
  },
};
