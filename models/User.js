const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// define the User model schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  gender: String,
  age: Number,
  income: {
    type: Schema.Types.ObjectId,
    ref: "IncomeSchema"
  },
  expenses: {
    type: Schema.Types.ObjectId,
    ref: "ExpensesSchema"
  }
});

// UserSchema.methods.comparePassword = function (inputPass) {
//     return bcrypt.compareSync(inputPass, this.password);
// }

// UserSchema.pre("save", function (next) {
//     if (!this.isModified("password")) return next();

//     this.password = bcrypt.hashSync(this.password, 10);

//     return next();
// });

module.exports = mongoose.model("User", UserSchema);
