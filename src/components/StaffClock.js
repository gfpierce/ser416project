import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

class StaffClock extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h2>Staff Clock</h2>
        <Footer />
      </div>
    );
  }
}

export default StaffClock;
