import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Equipment from "./components/Equipment";
import EventRegister from "./components/EventRegister";
import HomeCare from "./components/HomeCare";
import ManagerEquipmentReservation from "./components/ManagerEquipmentReservation";
import ManagerEventScheduler from "./components/ManagerEventScheduler";
import ManagerHome from "./components/ManagerHome";
import ManagerStaffScheduler from "./components/ManagerStaffScheduler";
import Payment from "./components/Payment";
import ShuttleRegister from "./components/ShuttleRegister";
import ShuttleSchedule from "./components/ShuttleSchedule";
import StaffAvailability from "./components/StaffAvailability";
import StaffClock from "./components/StaffClock";
import StaffHome from "./components/StaffHome";
import StaffSchedule from "./components/StaffSchedule";

const routing = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home}>
          <Home />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/calendar" component={Calendar}>
          <Calendar />
      </Route>
      <Route path="/contact" component={Contact} />
      <Route path="/details" component={Details} />
      <Route path="/equipment" component={Equipment} />
      <Route path="/register" component={EventRegister} />
      <Route path="/homecare" component={HomeCare} />
      <Route path="/manager" component={ManagerHome} />
      <Route path="/manager/eventscheduler" component={ManagerEventScheduler} />
      <Route
        path="/manager/equipmentreserve"
        component={ManagerEquipmentReservation}
      />
      <Route path="/manager/staffscheduler" component={ManagerStaffScheduler} />
      <Route path="/payment" component={Payment} />
      <Route path="/shuttleregister" component={ShuttleRegister} />
      <Route path="/shuttleschedule" component={ShuttleSchedule} />
      <Route path="/staff" component={StaffHome} />
      <Route path="/staff/availability" component={StaffAvailability} />
      <Route path="/staff/clock" component={StaffClock} />
      <Route path="/staff/schedule" component={StaffSchedule} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
