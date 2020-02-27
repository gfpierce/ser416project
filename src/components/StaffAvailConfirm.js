import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class StaffAvailConfirm extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Jumbotron>
          <h2>Availability confirmed!</h2>
          <p>Your schedule has been updated</p>
          <Button href="/staff">Go back home</Button>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

export default StaffAvailConfirm;
