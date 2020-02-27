import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class StaffAvailability extends Component {
  render() {
    return (
      <div>
        <Menu />
        <InputGroup style={{ paddingLeft: 40, marginTop: 20, width: "400px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>Time Available</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Time Available" />
        </InputGroup>

        <Button
          href="/staffavailconfirm"
          style={{ marginLeft: 40, marginTop: 10 }}
        >
          Confirm
        </Button>
        <Footer />
      </div>
    );
  }
}

export default StaffAvailability;
