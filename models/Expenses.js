const mongoose = require("mongoose");

// define the User model schema
const ExpensesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("UserExpenses", ExpensesSchema);
