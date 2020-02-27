import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";

import Menu from "./Menu";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <CardDeck style={{ padding: 20 }}>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Home Care</Card.Title>
              <Card.Text>
                Our center offers top-notch home care for homebound people with
                medical needs.
              </Card.Text>
              <Card.Link href="/homecare">Register for Home Care</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Payment Portal</Card.Title>
              <Card.Text>
                Donate to our community center or pay outstanding fees
              </Card.Text>
              <Card.Link href="/payment">Jump to Payment Portal</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Contact an Event Specialist</Card.Title>
              <Card.Text>
                Start the process of hosting an event at the community center by
                having a conversation with one of our Event Specialists.
              </Card.Text>
              <Card.Link href="/contact">
                Speak with an Event Specialist
              </Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Shuttle Schedule</Card.Title>
              <Card.Text>
                Our community center provides shuttle services to help you get
                around town
              </Card.Text>
              <Card.Link href="/shuttleschedule">
                View the Shuttle Schedule
              </Card.Link>
            </Card.Body>
          </Card>
        </CardDeck>
        <Jumbotron>

        </Jumbotron>

        <Footer />
      </div>
    );
  }
}

export default Home;
