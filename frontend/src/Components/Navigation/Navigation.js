import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./logo512.png";
// import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navigation extends Component {
  render() {
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
          {/* <Form className="">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-3"
              width="30%"
            />
          </Form> */}
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
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
