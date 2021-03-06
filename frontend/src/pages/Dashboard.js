import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  return (
    <div className="container pt-5">
      <section className="heading pt-5">
        <h1 className="pt-5">Hi {name}!</h1>
        <h1>Welcome Back to Your Dashboard!</h1>
        <p className="text-center">What do you need help with?</p>
      </section>
      <section className="pt-5">
        <Link to="/new-expense" className="btn btn-reverse btn-block">
          <FaQuestionCircle /> Record New Expense
        </Link>
        <Link to="/expenses" className="btn btn-block">
          <FaTicketAlt /> View My Total Expense
        </Link>
      </section>
    </div>
  );
}

export default Dashboard;
