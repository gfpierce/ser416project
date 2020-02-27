import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Table from "react-bootstrap/Table";

class Calendar extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Table bordered>
          <tr>
            <td colSpan="7" style={{ textAlign: "center" }}>
              February 2020
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>Su</th>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td colSpan="5"></td>
            <td>
              <a href="/details">1</a>
            </td>
            <td>
              <a href="/details">2</a>
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>
              <a href="/details">3</a>
            </td>
            <td>
              <a href="/details">4</a>
            </td>
            <td>
              <a href="/details">5</a>
            </td>
            <td>
              <a href="/details">6</a>
            </td>
            <td>
              <a href="/details">7</a>
            </td>
            <td>
              <a href="/details">8</a>
            </td>
            <td>
              <a href="/details">9</a>
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>
              <a href="/details">10</a>
            </td>
            <td>
              <a href="/details">11</a>
            </td>
            <td>
              <a href="/details">12</a>
            </td>
            <td>
              <a href="/details">13</a>
            </td>
            <td>
              <a href="/details">14</a>
            </td>
            <td>
              <a href="/details">15</a>
            </td>
            <td>
              <a href="/details">16</a>
            </td>
          </tr>
        </Table>
        <Footer />
      </div>
    );
  }
}

export default Calendar;
