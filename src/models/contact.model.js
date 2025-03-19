// w01-project/app/models/contact.model.js
// Model for contact data defining schema

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  contact_id: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  first_name: String,
  last_name: String,
  birthday: Date,
  role: {
    type: String,
    enum: ["Developer", "Designer", "Administrator", "Tester", "Analyst"],
    default: "Developer",
  },
  favorite_color: { type: String },
  projects: [String],
  active: Boolean,
  joined_date: Date,
  last_login_ip: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
