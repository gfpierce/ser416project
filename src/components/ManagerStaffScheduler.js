import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class ManagerStaffScheduler extends Component {
  render() {
    return (
      <div>
        <Menu />
        <DropdownButton
          title="Staff Member"
          style={{ marginLeft: 40, marginTop: 20 }}
        >
          <Dropdown.Item>Bob Jameson</Dropdown.Item>
          <Dropdown.Item>James Bobson</Dropdown.Item>
        </DropdownButton>

        <InputGroup style={{ paddingLeft: 40, marginTop: 10, width: "400px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>Start Time</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Start Time" />
        </InputGroup>

        <InputGroup style={{ paddingLeft: 40, marginTop: 10, width: "400px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>Event Length</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Event Length" />
        </InputGroup>

        <Button
          href="/managereventconfirmed"
          style={{ marginLeft: 40, marginTop: 10 }}
        >
          Confirm
        </Button>
        <Footer />
      </div>
    );
  }
}

export default ManagerStaffScheduler;
