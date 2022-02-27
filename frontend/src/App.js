import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Footer from "./pages/Footer";
import NewExpense from "./pages/NewExpense";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import ExpensesList from "./pages/ExpensesList";
import ExpensePage from "./pages/ExpensePage";

function App() {
  return (
    <div className="">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path="/new-expense" element={<PrivateRoute/>}>
              <Route path="/new-expense" element ={<NewExpense />} />
            </Route> */}
          <Route path="/new-expense" element={<NewExpense />}></Route>
          <Route path="/my-dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpensesList />} />
          <Route path="/expenses/expenseId" element={<ExpensePage />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
