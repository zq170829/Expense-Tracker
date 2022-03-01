import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/logo512.png";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <Navbar
      collapseOnSelect
      className="App-header bg-light nav-theme"
      expand="sm"
      fixed="top"
    >
      <LinkContainer to="/">
        <Navbar.Brand className="nav_brand d-inline-block align-top">
          <img className="App-logo " width="50" height="50" src={logo} />
          Expense <span style={{ color: "#fabb47" }}>Tracker </span>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-left">
        {user ? (
          <Nav className="">
            <LinkContainer className="nav_container" to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link onClick={onLogout}>
                <FaSignOutAlt />
                Logout
              </Nav.Link>
            </LinkContainer>
          </Nav>
        ) : (
          <Nav className="">
            <LinkContainer className="nav_container" to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
