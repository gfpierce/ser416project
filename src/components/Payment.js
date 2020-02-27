import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Payment extends Component {
  render() {
    return (
      <div>
        <Menu />
          <InputGroup style={{ paddingLeft: 40, paddingTop: 20, width: "550px" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>Card Number</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Please don't actually put your card number here"></FormControl>
          </InputGroup>

          <InputGroup style={{ paddingLeft: 40, paddingTop: 10, width: "550px" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>Name on Card</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Please don't actually put your card number here"></FormControl>
          </InputGroup>

          <Button href="/" style={{ marginLeft: 40, marginTop: 10 }}>Submit</Button>
        <Footer />
      </div>
    );
  }
}

export default Payment;
