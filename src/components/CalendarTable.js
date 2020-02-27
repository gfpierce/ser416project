import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class CalendarTable extends Component {
  render() {
    return (
      <div>
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
          <tr style={{ textAlign: "center" }}>
            <td>
              <a href="/details">17</a>
            </td>
            <td>
              <a href="/details">18</a>
            </td>
            <td>
              <a href="/details">19</a>
            </td>
            <td>
              <a href="/details">20</a>
            </td>
            <td>
              <a href="/details">21</a>
            </td>
            <td>
              <a href="/details">22</a>
            </td>
            <td>
              <a href="/details">23</a>
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>
              <a href="/details">24</a>
            </td>
            <td>
              <a href="/details">25</a>
            </td>
            <td>
              <a href="/details">26</a>
            </td>
            <td>
              <a href="/details">27</a>
            </td>
            <td>
              <a href="/details">28</a>
            </td>
            <td>
              <a href="/details">29</a>
            </td>
          </tr>
        </Table>
      </div>
    );
  }
}

export default CalendarTable;
