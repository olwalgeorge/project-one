// src/services/contacts.service.js
const Contact = require("../models/contact.model");

async function createContact(contactData) {
  const contact = new Contact(contactData);
  return contact.save();
}

async function getAllContacts() {
  return Contact.find();
}

async function getContactById(contactId) {
  return Contact.findById(contactId);
}

async function updateContact(contactId, updateData) {
  return Contact.findByIdAndUpdate(contactId, updateData, { new: true });
}

async function deleteContact(contactId) {
  return Contact.findByIdAndDelete(contactId);
}

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};
