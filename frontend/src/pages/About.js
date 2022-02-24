import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


export default class About extends Component {
  render() {
    return (
      <div id="about" className="bg-danger">
        <Container fluid className="mt-5">
          <Row>
            <Col className="mt-7 text-center bg-info">
              <h1 className="pt-7">Best Expense Tracker App</h1>
              <p>Know where your money goes</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src="https://www.techwibe.com/wp-content/uploads/2021/01/word-image-40.png" />
            </Col>
            <Col>
              <h3 className="mt-4">Why Choose Us?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
