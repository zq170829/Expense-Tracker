import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./logo512.png";
// import { Link } from "react-router-dom";
import "./Navigation.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        className="animate-navbar nav-theme justify-content-between bg-secondary"
        expand="sm"
        fixed="top"
      >
        <LinkContainer to="/">
          <Navbar.Brand>
            <img className="Logo" style={{ width: "5%" }} src={logo} />
            Expense <span style={{ color: "#fabb47" }}>Tracker </span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer ClassName="nav_container" to="/">
              <Nav.Link
                activeClassName="is-active"
                exact={true}
                className="nav-link"
              >
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link
                activeClassName="is-active"
                exact={true}
                className="nav-link"
              >
                About
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Link
                activeClassName="is-active"
                exact={true}
                className="nav-link"
              >
                Pricing
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link
                activeClassName="is-active"
                exact={true}
                className="nav-link mr-auto"
              >
                Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
