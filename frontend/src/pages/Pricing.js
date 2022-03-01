import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Pricing extends Component {
  render() {
    return (
      <div id="pricing" className="pt-5">
        <h1 className="pt-5 text-center">Pricing Details</h1>
        <CardGroup className="mr-5 mb-2">
          <Card className="bg-light mr-2">
            <Card.Body>
              <Card.Title className="text-center">
                <h1>BASIC</h1>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">
                FREE
              </Card.Subtitle>
              <Card.Text>
                <ul className="list-display list-checkmarks">
                  <li>All essential features</li>
                  <li>Some basic integration</li>
                  <li>Greate security and support</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button href="#" variant="success" size="sm">
                Sign Up
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                <h1>PLUS</h1>
                <Badge pill bg="warning" text="dark">
                  save $50!
                </Badge>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">
                $9.99/monthly
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted text-center">
                $69.88/annually
              </Card.Subtitle>
              <Card.Text>
                <ul className="list-display list-checkmarks">
                  <li>All essential features</li>
                  <li>Some basic integration</li>
                  <li>Advanced security and support</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button href="#" variant="primary" variant="success" size="sm">
                Try PLUS for free
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                <h1>PRO</h1>
              </Card.Title>
              <Card.Text className>
                <ul className="list-display list-checkmarks">
                  <li>All essential features</li>
                  <li>All integration</li>
                  <li>Advanced security and support</li>
                  <li>Professional advice and VIP support</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button href="#" variant="success" size="sm">
                Get a Quote
              </Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
