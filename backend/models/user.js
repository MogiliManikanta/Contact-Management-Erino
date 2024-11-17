const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Company: {
    type: String,
    required: true,
  },
  JobTitle: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
