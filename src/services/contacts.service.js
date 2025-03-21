// src/services/contacts.service.js
const Contact = require("../models/contact.model");

async function createContact(contactData) {
  const contact = new Contact(contactData);
  return contact.save();
}

async function getAllContacts() {
  return Contact.find();
}

// Find using contact-id not the internal database id as the rest
async function getContactById(contactId) {
  return Contact.findOne({ contact_id: contactId });
}

// Patch contact
async function updateContact(_id, updateData) {
  return Contact.findByIdAndUpdate(
    { _id: _id },
    updateData,
    { new: true },
    { runValidators: true }
  );
}

// Put contact
async function replaceContact(_id, replaceData) {
  return Contact.findOneAndReplace(
    { _id: _id },
    replaceData,
    { new: true },
    { runValidators: true }
  );
}

async function deleteContact(_id) {
  return Contact.findByIdAndDelete(_id);
}

async function deleteAllContacts() {
  return Contact.deleteMany();
}

async function getDevelopers() {
  return Contact.find({ role: "Developer" });
}

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
