import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExpenses, reset } from "../features/expenses/expenseSlice";
import Spinner from "../components/Spinner";
import ExpenseItem from "../components/ExpenseItem";
import BackButton from "../components/BackButton";

function ExpensesList() {
  const { expenses, isLoading, isSuccess, isError } = useSelector(
    (state) => state.expense
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset);
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  const total = expenses
    .reduce((acc, currVal) => {
      return currVal.type === "Education"
        ? acc - currVal.amount
        : acc + currVal.amount;
    }, 0)
    .toFixed(2);
  return (
    <div className="pt-5">
      <BackButton url="/my-dashboard" />
      <h1>My Total Expenses: ${total}</h1>
      <div className="expenses">
        <div className="expense-headings">
          <div>Date</div>
          <div>Category</div>
          <div>Amount</div>
          <div></div>
        </div>
        {expenses.map((expense) => (
          <ExpenseItem key={expense._id} expense={expense} />
        ))}
      </div>
    </div>
  );
}
export default ExpensesList;
