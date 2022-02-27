const express = require("express");
const router = express.Router();

const {
  getExpenses,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getExpenses).post(protect, createExpense);
router.route("/:id").get(protect, getExpense);
router.route("/:id").delete(protect, deleteExpense).put(protect, updateExpense);

module.exports = router;
