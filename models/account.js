const mongoose = require('mongoose');


const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  username: {
    type: String,
    unique: true
  },
  full_name: { type: String },
  birthday: { type: String },
  isVerify: {
    type: Boolean,
    default: false
  },
  is_active: {
    type: Boolean,
    default: true
  },
  role_id: {
    type: String,
    enum: ["admin", "customer", "staff"],
    default: "customer",
  },
})

const Account = mongoose.model("accounts", accountSchema);

module.exports = Account;
