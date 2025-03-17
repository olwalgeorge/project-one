// w01-project/app/models/contact.model.js
// Model for contact data defining schema

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  role: String,
  favoriteColor: { type: String, enum: ["red", "green", "blue"] },
  projects: [String],
  active: Boolean,
  joinedDate: Date,
  lastLoginIP: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
