import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

class ManagerEventScheduler extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h2>Manager Equipment Reservation</h2>
        <Footer />
      </div>
    );
  }
}

export default ManagerEventScheduler;
