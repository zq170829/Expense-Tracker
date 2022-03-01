import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./pages/Footer";
import NewExpense from "./pages/NewExpense";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ExpensesList from "./pages/ExpensesList";
// import ExpensePage from "./pages/ExpensePage";
import "./App.css";

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
          <Route path="/my-dashboard" element={<PrivateRoute />}>
            <Route path="/my-dashboard" element={<Dashboard />} />
          </Route>
          {/*<Route path="/new-expense" element={<NewExpense />} /> */}
          {/* <Route path="/new-expense" element={<PrivateRoute />}>
            <Route path="/new-expense" element={<NewExpense />} />
          </Route> */}
          {/* <Route path="/expenses" element={<PrivateRoute />}>
            <Route path="/expenses" element={<ExpensesList />} />
          </Route> */}

          <Route path="/new-expense" element={<NewExpense />}></Route>
          {/* <Route path="/my-dashboard" element={<Dashboard />} /> */}
          <Route path="/expenses" element={<ExpensesList />} />
          {/* <Route path="/expenses/expenseId" element={<ExpensePage />} /> */}
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
