import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class ManagerEventConfirmed extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Jumbotron>
            <h2>Event Details Confirmed!</h2>
            <p>Message sent to requestor.</p>
            <Button href="/">Go back home</Button>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

export default ManagerEventConfirmed;