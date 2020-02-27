import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="bottom">
          <Container>
            <Navbar.Brand>Best Community Service</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

let style = {};

let footStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};
export default Footer;
