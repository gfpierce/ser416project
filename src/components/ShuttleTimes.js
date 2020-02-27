import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ShuttleTimes extends Component {
  render() {
    return (
      <div>
        <Menu />
        <CardDeck style={{ padding: 40 }}>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Downtown Stop</Card.Title>
              <Card.Text>8:55 AM</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Suburbs Stop</Card.Title>
              <Card.Text>9:15 AM</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <div style={{ textAlign: "center" }}>
          <Button href="/">Go back home</Button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ShuttleTimes;
