import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class Confirmed extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Jumbotron>
            <h2>Reservation confirmed!</h2>
            <p>We can't wait to see you.</p>
            <Button href="/">Go back home</Button>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

export default Confirmed;