//  validators/contact.validator.js
const mongoose = require("mongoose"); // Import Mongoose to interact with the database

const validateContactData = async (data) => {
  const errors = {};

  // contact_id Validation
  if (!data.contact_id) {
    errors.contact_id = "Contact ID is required.";
  } else if (typeof data.contact_id !== "number") {
    errors.contact_id = "Contact ID must be a number.";
  } else {
    // Check for uniqueness
    const existingContactId = await mongoose
      .model("Contact")
      .findOne({ contact_id: data.contact_id });
    if (existingContactId) {
      errors.contact_id = "Contact ID must be unique.";
    }
  }

  // username Validation
  if (!data.username) {
    errors.username = "Username is required.";
  } else if (typeof data.username !== "string") {
    errors.username = "Username must be a string.";
  } else {
    // Check for uniqueness
    const existingUsername = await mongoose
      .model("Contact")
      .findOne({ username: data.username });
    if (existingUsername) {
      errors.username = "Username must be unique.";
    }
  }

  // email Validation
  if (!data.email) {
    errors.email = "Email is required.";
  } else if (typeof data.email !== "string") {
    errors.email = "Email must be a string.";
  } else {
    // Check for uniqueness
    const existingEmail = await mongoose
      .model("Contact")
      .findOne({ email: data.email });
    if (existingEmail) {
      errors.email = "Email must be unique.";
    }
  }

  // role Validation (no change)
  if (data.role && typeof data.role !== "string") {
    errors.role = "Role must be a string.";
  } else if (data.role) {
    const allowedRoles = [
      "Developer",
      "Designer",
      "Administrator",
      "Tester",
      "Analyst",
    ];
    if (!allowedRoles.includes(data.role)) {
      errors.role = `Role must be one of: ${allowedRoles.join(", ")}`;
    }
  }

  // birthday Validation (no change)
  if (data.birthday) {
    const birthdayDate = new Date(data.birthday);
    if (isNaN(birthdayDate.getTime())) {
      errors.birthday = "Birthday must be a valid date.";
    }
  }

  // active Validation (no change)
  if (data.active && typeof data.active !== "boolean") {
    errors.active = "Active must be a boolean.";
  }

  // joined_date Validation (no change)
  if (data.joined_date) {
    const joinedDate = new Date(data.joined_date);
    if (isNaN(joinedDate.getTime())) {
      errors.joined_date = "Joined date must be a valid date.";
    }
  }

  return errors;
};

module.exports = {
  validateContactData,
};
