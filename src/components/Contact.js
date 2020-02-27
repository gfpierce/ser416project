import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

class Contact extends Component {
  render() {
    return (
      <div>
        <Menu />
        <InputGroup
          style={{
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            width: "800px"
          }}
        >
          <InputGroup.Prepend>
            <InputGroup.Text>Event Description</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Event Description" />
        </InputGroup>

        <InputGroup
          style={{
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 10,
            width: "400px"
          }}
        >
          <InputGroup.Prepend>
            <InputGroup.Text>Email</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Your Email" />
        </InputGroup>

        <InputGroup
          style={{
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 10,
            width: "400px"
          }}
        >
          <InputGroup.Prepend>
            <InputGroup.Text>Expected # of Attendees</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Attendees" />
        </InputGroup>

        <DropdownButton title="Month" style={{ marginLeft: 40, marginTop: 10 }}>
          <Dropdown.Item>January</Dropdown.Item>
          <Dropdown.Item>February</Dropdown.Item>
          <Dropdown.Item>March</Dropdown.Item>
          <Dropdown.Item>April</Dropdown.Item>
          <Dropdown.Item>May</Dropdown.Item>
          <Dropdown.Item>June</Dropdown.Item>
          <Dropdown.Item>July</Dropdown.Item>
          <Dropdown.Item>August</Dropdown.Item>
          <Dropdown.Item>September</Dropdown.Item>
          <Dropdown.Item>October</Dropdown.Item>
          <Dropdown.Item>November</Dropdown.Item>
          <Dropdown.Item>December</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Day" style={{ marginLeft: 40, marginTop: 10 }}>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
          <Dropdown.Item>4</Dropdown.Item>
          <Dropdown.Item>5</Dropdown.Item>
          <Dropdown.Item>6</Dropdown.Item>
          <Dropdown.Item>7</Dropdown.Item>
          <Dropdown.Item>8</Dropdown.Item>
          <Dropdown.Item>9</Dropdown.Item>
          <Dropdown.Item>10</Dropdown.Item>
          <Dropdown.Item>11</Dropdown.Item>
          <Dropdown.Item>12</Dropdown.Item>
          <Dropdown.Item>13</Dropdown.Item>
          <Dropdown.Item>14</Dropdown.Item>
          <Dropdown.Item>15</Dropdown.Item>
          <Dropdown.Item>16</Dropdown.Item>
          <Dropdown.Item>17</Dropdown.Item>
          <Dropdown.Item>18</Dropdown.Item>
          <Dropdown.Item>19</Dropdown.Item>
          <Dropdown.Item>20</Dropdown.Item>
          <Dropdown.Item>21</Dropdown.Item>
          <Dropdown.Item>22</Dropdown.Item>
          <Dropdown.Item>23</Dropdown.Item>
          <Dropdown.Item>24</Dropdown.Item>
          <Dropdown.Item>25</Dropdown.Item>
          <Dropdown.Item>26</Dropdown.Item>
          <Dropdown.Item>27</Dropdown.Item>
          <Dropdown.Item>28</Dropdown.Item>
          <Dropdown.Item>29</Dropdown.Item>
          <Dropdown.Item>30</Dropdown.Item>
          <Dropdown.Item>31</Dropdown.Item>
        </DropdownButton>

        <Button
          href="/equipment"
          target="_blank"
          style={{ marginLeft: 40, marginTop: 10 }}
        >
          View Equipment
        </Button>

        <InputGroup
          style={{
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            width: "800px"
          }}
        >
          <InputGroup.Prepend>
            <InputGroup.Text>Requested Equipment</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Requested Equipment" />
        </InputGroup>

        <div>
          <Button href="/sent" style={{ marginLeft: 40, marginTop: 10 }}>
            Send Details
          </Button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;
