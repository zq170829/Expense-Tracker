const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    category: {
      type: String,
      required: [true, "Please enter the expense category"],
      enum:['Housing','Utilities', 'Shopping', 'Education']
    },
    amount: {
      type: Number,
      required: [true, "Please enter your expense amount"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);
