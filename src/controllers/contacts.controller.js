// w01-project/app/controllers/contacts.controller.js
// Controller for contact routes that handle contact CRUD operations and return as JSON

const Contact = require("../models/contact.model");
exports.createContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.status(201).send("contact created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to create contact");
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).send("Failed to retrieve contacts" + error.message);
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const contactData = await Contact.findById(contactId);
    if (!contactData) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contactData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve contact", error: error.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const updatedcontact = await Contact.findByIdAndUpdate(
      contactId,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedcontact) {
      return res.status(404).json({ message: "contact not found" });
    }
    res.status(200).json(updatedcontact);
  } catch (error) {
    res.status(500).send("Failed to update contact" + error.message);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    await Contact.findByIdAndDelete(contactId);
    res.status(200).send("contact deleted successfully");
  } catch (error) {
    res.status(500).send("Failed to delete contact" + error.message);
  }
};
