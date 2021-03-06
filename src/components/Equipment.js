import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

class Equipment extends Component {
  render() {
    return (
      <div>
        <Menu />
        <CardDeck style={{ padding: 40 }}>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Folding Chairs</Card.Title>
              <Card.Text>
                Perfectly mobile and surprisingly comfortable
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Projector</Card.Title>
              <Card.Text>Helps display images and video</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Sound System</Card.Title>
              <Card.Text>Amplification for sound needs</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <Footer />
      </div>
    );
  }
}

export default Equipment;
