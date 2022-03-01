import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createExpense, reset } from "../features/expenses/expenseSlice";
import { Spinner } from "react-bootstrap";
import BackButton from "../components/BackButton";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NewExpense() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.expense
  );
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
      toast.success("Your expense was recorded successfully");
      navigate("/my-dashboard");
    }
    dispatch(reset());
  }, [dispatch, isError, isLoading, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(category);
    dispatch(createExpense({ category, amount }));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container pt-5">
      <BackButton url="/my-dashboard" />
      <h1 className="">Record Your New Expense</h1>
      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Housing">Housing</option>
              <option value="Shopping">Shopping</option>
              <option value="Utilities">Utilities</option>
              <option value="Education">Education</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">How much you expense?</label>
            <textarea
              name="amount"
              id="amount"
              className="form-control"
              placeholder="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}
