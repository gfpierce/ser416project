import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Table from "react-bootstrap/Table";

class ShuttleSchedule extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h2 style={{ textAlign: "center", marginTop: 20 }}>Shuttle Schedule</h2>
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Select a date to see the shuttle schedule
        </p>
        <div style={{ paddingLeft: 40, paddingRight: 40, marginTop: 20 }}>
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
                <a href="/shuttletimes">1</a>
              </td>
              <td>
                <a href="/shuttletimes">2</a>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                <a href="/shuttletimes">3</a>
              </td>
              <td>
                <a href="/shuttletimes">4</a>
              </td>
              <td>
                <a href="/shuttletimes">5</a>
              </td>
              <td>
                <a href="/shuttletimes">6</a>
              </td>
              <td>
                <a href="/shuttletimes">7</a>
              </td>
              <td>
                <a href="/shuttletimes">8</a>
              </td>
              <td>
                <a href="/shuttletimes">9</a>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                <a href="/shuttletimes">10</a>
              </td>
              <td>
                <a href="/shuttletimes">11</a>
              </td>
              <td>
                <a href="/shuttletimes">12</a>
              </td>
              <td>
                <a href="/shuttletimes">13</a>
              </td>
              <td>
                <a href="/shuttletimes">14</a>
              </td>
              <td>
                <a href="/shuttletimes">15</a>
              </td>
              <td>
                <a href="/shuttletimes">16</a>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                <a href="/shuttletimes">17</a>
              </td>
              <td>
                <a href="/shuttletimes">18</a>
              </td>
              <td>
                <a href="/shuttletimes">19</a>
              </td>
              <td>
                <a href="/shuttletimes">20</a>
              </td>
              <td>
                <a href="/shuttletimes">21</a>
              </td>
              <td>
                <a href="/shuttletimes">22</a>
              </td>
              <td>
                <a href="/shuttletimes">23</a>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                <a href="/shuttletimes">24</a>
              </td>
              <td>
                <a href="/shuttletimes">25</a>
              </td>
              <td>
                <a href="/shuttletimes">26</a>
              </td>
              <td>
                <a href="/shuttletimes">27</a>
              </td>
              <td>
                <a href="/shuttletimes">28</a>
              </td>
              <td>
                <a href="/shuttletimes">29</a>
              </td>
              <td></td>
            </tr>
          </Table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ShuttleSchedule;
