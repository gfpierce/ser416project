import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class ManagerEquipmentReservation extends Component {
  render() {
    return (
      <div>
        <Menu />
        <DropdownButton
          title="Equipment Type"
          style={{ marginLeft: 40, marginTop: 20 }}
        >
          <Dropdown.Item>Folding Chairs</Dropdown.Item>
          <Dropdown.Item>Projector</Dropdown.Item>
          <Dropdown.Item>Sound System</Dropdown.Item>
        </DropdownButton>

        <InputGroup style={{ paddingLeft: 40, marginTop: 10, width: "400px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>Number Needed</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Number Needed" />
        </InputGroup>

        <DropdownButton
          title="Equipment Type"
          style={{ marginLeft: 40, marginTop: 20 }}
        >
          <Dropdown.Item>Folding Chairs</Dropdown.Item>
          <Dropdown.Item>Projector</Dropdown.Item>
          <Dropdown.Item>Sound System</Dropdown.Item>
        </DropdownButton>

        <InputGroup style={{ paddingLeft: 40, marginTop: 10, width: "400px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>Number Needed</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Number Needed" />
        </InputGroup>

        <DropdownButton
          title="Equipment Type"
          style={{ marginLeft: 40, marginTop: 20 }}
        >
          <Dropdown.Item>Folding Chairs</Dropdown.Item>
          <Dropdown.Item>Projector</Dropdown.Item>
          <Dropdown.Item>Sound System</Dropdown.Item>
        </DropdownButton>

        <InputGroup style={{ paddingLeft: 40, marginTop: 10, width: "400px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>Number Needed</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Number Needed" />
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

export default ManagerEquipmentReservation;
