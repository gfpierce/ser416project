import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class Sent extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Jumbotron>
          <h2>Event details sent!</h2>
          <p>You should be hearing from an Event Specialist soon.</p>
          <Button href="/">Go back home</Button>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

export default Sent;
