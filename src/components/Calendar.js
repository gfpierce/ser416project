import React, { Component } from 'react';
import Menu from './Menu';
import Footer from "./Footer";

class Calendar extends Component {
  render() {
    return (
        <div>
          <Menu />
          <h2>Calendar</h2>
          <p>Hello</p>
          <Footer />
        </div>
    );
  }
  
}

export default Calendar;