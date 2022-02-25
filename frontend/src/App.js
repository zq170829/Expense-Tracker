import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import Register from "./pages/Register";
import Login from "./pages/Login/Login";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <div className="">
      <Router>
        <Navigation />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
