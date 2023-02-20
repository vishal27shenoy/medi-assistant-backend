const mongoose = require("mongoose");
const validator = require("validator");
const Schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Enter Valid Email");
      }
    },
  },
  gender: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    minlength: 8,
    maxlength: 16,
    type: String,
  },
});

const RegisterSchema = new mongoose.model("RegisterSchema", Schema);
module.exports = RegisterSchema;
