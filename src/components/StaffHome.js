import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class StaffHome extends Component {
  render() {
    return (
      <div>
        <Menu />
        <CardDeck style={{ padding: 40 }}>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Availability</Card.Title>
              <Card.Text>Edit your availability</Card.Text>
              <Button href="/staffavailability">Availability</Button>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Schedule</Card.Title>
              <Card.Text>View your schedule</Card.Text>
              <Button href="/staffschedule">Schedule</Button>
            </Card.Body>
          </Card>

        </CardDeck>
        <div style={{ textAlign: 'center'}}>
          <Button href="/staffclock">Clock In/Out</Button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default StaffHome;
