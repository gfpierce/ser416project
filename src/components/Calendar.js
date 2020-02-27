import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import CalendarTable from "./CalendarTable";
import Table from "react-bootstrap/Table";

class Calendar extends Component {
  render() {
    return (
      <div>
        <Menu />
        <CalendarTable />
        <Footer />
      </div>
    );
  }
}

export default Calendar;
