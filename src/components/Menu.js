import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <nav>
            <a href="/">Home </a>
            <a href="/calendar">Calendar </a>
            <a href="/contact">Contact </a>
        </nav>
    );
  }
  
}

export default Menu;