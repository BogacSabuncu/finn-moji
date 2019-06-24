const mongoose = require("mongoose");

// define the User model schema
const IncomeSchema = new mongoose.Schema({
  nameIncome: {
    type: String,
    required: true
  },
  valueIncome: {
    type: Number,
    required: true
  }

});

module.exports = mongoose.model("UserIncome", IncomeSchema);
