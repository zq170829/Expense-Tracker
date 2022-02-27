const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Expense = require("../models/expenseModel");

// @desc    Get expense
// @route   GET /api/expenses
// @access  Private
const getExpenses = asyncHandler(async (req, res) => {
  //Get user using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found!");
  }
  const expenses = await Expense.find({ user: req.user.id });

  res.status(200).json(expenses);
  // res.status(200).json({ message: "getExpense" });
});

// @desc    Get expense
// @route   GET /api/expenses/:id
// @access  Private
const getExpense = asyncHandler(async (req, res) => {
  //Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found!");
  }
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    res.status(404);
    throw new Error("expense not found! controller!");
  }

  if (expense.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized!");
  }
  res.status(200).json(expense);
  // res.status(200).json({ message: "getExpense" });
});

// @desc    Create/Record new expenses
// @route   POST /api/expenses
// @access  Private
const createExpense = asyncHandler(async (req, res) => {
  const { category, amount } = req.body;
  if (!category || !amount) {
    res.status(400);
    throw new Error(
      "Please enter expense category and amount! from expenseController!"
    );
  }
  const expense = await Expense.create({
    category,
    amount,
    user: req.user.id,
  });

  res.status(200).json(expense);
  throw new Error('Your expense was recorded successfully!')
  // res.status(200).json({ message: "createExpense" });
});


// @desc    Update expense
// @route   PUT /api/expenses/:id
// @access  Private
const updateExpense = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found!");
  }

  const expense = await Expense.findById(req.params.id);
  if (!expense) {
    res.status(404);
    throw new Error("expense not found! controller!");
  }

  if (expense.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized!");
  }

  const updateExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateExpense);
});

// @desc    Delete expense
// @route   DELETE /api/expenses/:id
// @access  Private
const deleteExpense = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found!");
  }
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    res.status(404);
    throw new Error("expense not found! controller!");
  }

  if (expense.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized!");
  }

  await expense.remove();
  // res.status(200).json(success: true);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getExpenses,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
};
