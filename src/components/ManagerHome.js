import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ManagerHome extends Component {
  render() {
    return (
      <div>
        <Menu />
        <CardDeck style={{ padding: 40 }}>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Event Scheduler</Card.Title>
              <Card.Text>View requests for events and create events</Card.Text>
              <Button href="/managereventscheduler">Event Scheduler</Button>
            </Card.Body>
          </Card>
        </CardDeck>
        <Footer />
      </div>
    );
  }
}

export default ManagerHome;
