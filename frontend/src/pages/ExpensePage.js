import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import { toast } from "react-toastify";
import { getExpenseSingle, reset } from "../features/expenses/expenseSlice";
import { Spinner } from "react-bootstrap";

function ExpensePage() {
  const { expense, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.expense
  );

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { expenseId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getExpenseSingle(expenseId));
  }, [isError, message, expenseId]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  return (
    <div>
      <BackButton utl="/expenses"/>
      <h1>Single Expense for update and delete</h1>
    </div>
  );
}

export default ExpensePage;
