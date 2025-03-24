const Contact = require("../models/contact.model");

async function createContact(contactData) {
  try {
    const contact = new Contact(contactData);
    return await contact.save();
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  }
}

async function getAllContacts() {
  try {
    return await Contact.find();
  } catch (error) {
    console.error("Error getting all contacts:", error);
    throw error;
  }
}

async function getContactById(contactId) {
  try {
    const contact = await Contact.findOne({ contact_id: contactId });
    if (!contact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      throw error;
    }
    return contact;
  } catch (error) {
    console.error("Error getting contact by ID:", error);
    throw error;
  }
}

async function updateContact(_id, updateData) {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      { _id: _id },
      updateData,
      { new: true, runValidators: true }
    );
    if (!updatedContact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      throw error;
    }
    return updatedContact;
  } catch (error) {
    console.error("Error updating contact:", error);
    if (error.name === "ValidationError") {
      // Extract validation errors
      const validationErrors = {};
      for (const key in error.errors) {
        validationErrors[key] = error.errors[key].message;
      }
      const validationError = new Error("Validation failed");
      validationError.statusCode = 400; // Or appropriate status code
      validationError.errors = validationErrors;
      throw validationError;
    }
    throw error;
  }
}

async function replaceContact(_id, replaceData) {
  try {
    const replacedContact = await Contact.findOneAndReplace(
      { _id: _id },
      replaceData,
      { new: true, runValidators: true } // Ensure validators run on replace
    );
    if (!replacedContact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      throw error;
    }
    return replacedContact;
  } catch (error) {
    console.error("Error replacing contact:", error);
    throw error;
  }
}

async function deleteContact(_id) {
  try {
    const deletedContact = await Contact.findByIdAndDelete(_id);
    if (!deletedContact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      throw error;
    }
    return deletedContact;
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
}

async function deleteAllContacts() {
  try {
    await Contact.deleteMany();
  } catch (error) {
    console.error("Error deleting all contacts:", error);
    throw error;
  }
}

async function getDevelopers() {
  try {
    const developers = await Contact.find({ role: "Developer" });
    if (!developers || developers.length === 0) {
      const error = new Error("Developers not found");
      error.statusCode = 404;
      throw error;
    }
    return developers;
  } catch (error) {
    console.error("Error getting developers:", error);
    throw error;
  }
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
