import { Link } from "react-router-dom";

function ExpenseItem({ expense }) {
  return (
    <div className="expense">
      <div>{new Date(expense.createdAt).toLocaleString("en-US")}</div>
      <div>{expense.category}</div>
      <div className={`status status-${expense.category}`}>
        ${expense.amount}
      </div>
      <Link to={`/expenses/:${expense._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
    </div>
  );
}
export default ExpenseItem;
