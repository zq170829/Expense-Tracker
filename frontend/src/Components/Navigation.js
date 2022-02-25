import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./logo512.png";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        className="header bg-light nav-theme nav App-header"
        expand="sm"
        fixed="top"
      >
        <LinkContainer to="/">
          <Navbar.Brand className="nav_brand d-inline-block align-top">
            <img
              className="App-logo "
              width="50"
              height="50"
              src={logo}
            />
            Expense <span style={{ color: "#fabb47" }}>Tracker </span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-left">
          <Nav className="">
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
          </Nav>
          <LinkContainer to="/login">
            <Nav.Link
              activeClassName="is-active"
              exact={true}
              className="nav-link"
            >
              Sign In
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link
              activeClassName="is-active"
              exact={true}
              className="nav-link mr-auto"
            >
              Register
            </Nav.Link>
          </LinkContainer>
          <Form inline className="mr-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
