import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense, reset } from "../features/expenses/expenseSlice";

function ExpenseItem({ expense }) {
  const { expenses, isLoading, isSuccess, isError } = useSelector(
    (state) => state.expense
  );
  const params = useParams();
  const dispatch = useDispatch();
  const { expenseId } = useParams();
  const deleteSubmit = () => {
    dispatch(deleteExpense(expenseId));
    toast.success("expense was deleted");
  };
  return (
    <div className="ticket">
      <div>{new Date(expense.createdAt).toLocaleString("en-US")}</div>
      <div>{expense.category}</div>
      <div className={`status status-${expense.category}`}>
        ${expense.amount}
      </div>
      {/* <Link to={`/expenses/:${expense._id}`} className='btn btn-reverse btn-sm'>
        View
      </Link> */}
      <button className="btn btn-reverse btn-sm" onSubmit={deleteSubmit}>
        {" "}
        Delete{" "}
      </button>
    </div>
  );
}

export default ExpenseItem;
