import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer"
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

class EventRegister extends Component {
  render() {
    return (
      <div>
        <Menu />
        <InputGroup style={{ width: "400px", paddingLeft: 40, paddingTop: 40 }}>
          <InputGroup.Prepend>
            <InputGroup.Text>Email</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Email"/>
        </InputGroup>

        <DropdownButton title="Number of Attendees" style={{ paddingLeft: 40, paddingTop: 10 }}>
          <Dropdown.Item>
            1
          </Dropdown.Item>
          <Dropdown.Item>
            2
          </Dropdown.Item>
          <Dropdown.Item>
            3
          </Dropdown.Item>
          <Dropdown.Item>
            4
          </Dropdown.Item>
          <Dropdown.Item>
            5
          </Dropdown.Item>
          <Dropdown.Item>
            6
          </Dropdown.Item>
          <Dropdown.Item>
            7
          </Dropdown.Item>
          <Dropdown.Item>
            8
          </Dropdown.Item>
          <Dropdown.Item>
            9
          </Dropdown.Item>
          <Dropdown.Item>
            10
          </Dropdown.Item>
        </DropdownButton>
        <Button href="/confirmed" style={{ marginLeft: 40, marginTop: 10 }}>Confirm</Button>
        <Footer />
      </div>
    );
  }
}

export default EventRegister;
