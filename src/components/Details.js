import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Details extends Component {
  render() {
    return (
      <div>
        <Menu />
        <CardDeck style={{ padding: 40 }}>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Bluegrass Jam</Card.Title>
              <Card.Text>7 PM</Card.Text>
              <Card.Text>The community center's weekly bluegrass jam. Bring whatever instrument you like!</Card.Text>
              <Button href="/register">Register</Button>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Spanish Class</Card.Title>
              <Card.Text>2 PM</Card.Text>
              <Card.Text>A weekly class for people looking to learn Spanish</Card.Text>
              <Button href="/register">Register</Button>
            </Card.Body>
          </Card>
        </CardDeck>
        <Footer />
      </div>
    );
  }
}

export default Details;
