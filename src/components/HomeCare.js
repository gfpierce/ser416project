import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Table from "react-bootstrap/Table";
import Jumbotron from "react-bootstrap/Jumbotron";

class HomeCare extends Component {
  render() {
    return (
      <div>
        <Menu />

        <h2 style={{ textAlign: "center", marginTop: 20 }}>Home Care</h2>
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Select a date for your appointment
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
                <a href="/confirmed">1</a>
              </td>
              <td>
                <a href="/">2</a>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                <a href="/confirmed">3</a>
              </td>
              <td>
                <a href="/confirmed">4</a>
              </td>
              <td>
                <a href="/confirmed">5</a>
              </td>
              <td>
                <a href="/confirmed">6</a>
              </td>
              <td>
                <a href="/confirmed">7</a>
              </td>
              <td>
                <a href="/confirmed">8</a>
              </td>
              <td>
                <a href="/confirmed">9</a>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                <a href="/confirmed">10</a>
              </td>
              <td>
                <a href="/confirmed">11</a>
              </td>
              <td>
                <a href="/confirmed">12</a>
              </td>
              <td>
                <a href="/confirmed">13</a>
              </td>
              <td>
                <a href="/confirmed">14</a>
              </td>
              <td>
                <a href="/confirmed">15</a>
              </td>
              <td>
                <a href="/confirmed">16</a>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                <a href="/confirmed">17</a>
              </td>
              <td>
                <a href="/confirmed">18</a>
              </td>
              <td>
                <a href="/confirmed">19</a>
              </td>
              <td>
                <a href="/confirmed">20</a>
              </td>
              <td>
                <a href="/confirmed">21</a>
              </td>
              <td>
                <a href="/confirmed">22</a>
              </td>
              <td>
                <a href="/confirmed">23</a>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                <a href="/confirmed">24</a>
              </td>
              <td>
                <a href="/confirmed">25</a>
              </td>
              <td>
                <a href="/confirmed">26</a>
              </td>
              <td>
                <a href="/confirmed">27</a>
              </td>
              <td>
                <a href="/confirmed">28</a>
              </td>
              <td>
                <a href="/confirmed">29</a>
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

export default HomeCare;
