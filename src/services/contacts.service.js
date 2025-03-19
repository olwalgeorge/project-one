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
async function updateContact(contactId, updateData) {
  return Contact.findByIdAndUpdate(contactId, updateData, { new: true }, {runValidators: true});
}

// Put contact
async function replaceContact(contactId, replaceData) { 
  // First check if contact exists
  const existingContact = await Contact.findById(contactId);
  if (!existingContact) {
    return null;
  }

  // Replace the contact
  return Contact.findByIdAndUpdate(
    contactId,
    replaceData, 
    { new: true, overwrite: true, runValidators: true} 
  )
  
}



async function deleteContact(contactId) {
  return Contact.findByIdAndDelete(contactId);
}

async function deleteAllContacts() {
  return Contact.deleteMany();
}

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  replaceContact,
  deleteContact,
  deleteAllContacts,
};
