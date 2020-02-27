import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

class ManagerEventScheduler extends Component {
  render() {
    return (
      <div>
        <Menu />
        <CardDeck style={{ padding: 40 }}>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Staff Scheduler</Card.Title>
              <Card.Text>Schedule staff for events</Card.Text>
              <Button href="/managerstaffscheduler">Staff Scheduler</Button>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Equipment Reservation</Card.Title>
              <Card.Text>Reserve equipment for events</Card.Text>
              <Button href="/managerequipmentreserve">Equipment Reservation</Button>
            </Card.Body>
          </Card>
        </CardDeck>
        <Footer />
      </div>
    );
  }
}

export default ManagerEventScheduler;
