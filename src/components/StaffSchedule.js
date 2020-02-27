import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";

class StaffSchedule extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h2 style={{ marginLeft: 40, marginTop: 20 }}>Feb 28, 2020</h2>
        <p style={{ marginLeft: 40, marginTop: 10 }}>4:00 PM - 8:00 PM</p>
        <Button href="/staff" style={{ marginLeft: 40 }}>
          Go back home
        </Button>
        <Footer />
      </div>
    );
  }
}

export default StaffSchedule;
