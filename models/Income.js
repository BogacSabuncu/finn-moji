const mongoose = require("mongoose");

// define the User model schema
const IncomeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  frequency: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("UserIncome", IncomeSchema);
