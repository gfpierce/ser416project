import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <nav>
            <a href="/">Home </a>
            <a href="/calendar">Calendar </a>
            <a href="/contact">Contact </a>
            <a href="/staff">Staff Login </a>
            <a href="/manager">Manager Login</a>
            <a href="/payment">Payment</a>
        </nav>
    );
  }
  
}

export default Menu;