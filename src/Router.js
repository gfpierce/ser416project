import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Confirmed from "./components/Confirmed";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Equipment from "./components/Equipment";
import EventRegister from "./components/EventRegister";
import HomeCare from "./components/HomeCare";
import ManagerEquipmentReservation from "./components/ManagerEquipmentReservation";
import ManagerEventConfirmed from "./components/ManagerEventConfirmed";
import ManagerEventScheduler from "./components/ManagerEventScheduler";
import ManagerHome from "./components/ManagerHome";
import ManagerStaffScheduler from "./components/ManagerStaffScheduler";
import Payment from "./components/Payment";
import Sent from "./components/Sent";
import ShuttleSchedule from "./components/ShuttleSchedule";
import ShuttleTimes from "./components/ShuttleTimes";
import StaffAvailability from "./components/StaffAvailability";
import StaffClock from "./components/StaffClock";
import StaffHome from "./components/StaffHome";
import StaffSchedule from "./components/StaffSchedule";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/calendar" component={Calendar}></Route>
      <Route path="/confirmed" component={Confirmed}></Route>
      <Route path="/contact" component={Contact} />
      <Route path="/details" component={Details} />
      <Route path="/equipment" component={Equipment} />
      <Route path="/register" component={EventRegister} />
      <Route path="/homecare" component={HomeCare} />
      <Route path="/manager" component={ManagerHome} />
      <Route path="/managereventconfirmed" component={ManagerEventConfirmed} />
      <Route path="/managereventscheduler" component={ManagerEventScheduler} />
      <Route
        path="/managerequipmentreserve"
        component={ManagerEquipmentReservation}
      />
      <Route path="/managerstaffscheduler" component={ManagerStaffScheduler} />
      <Route path="/payment" component={Payment} />
      <Route path="/sent" component={Sent} />
      <Route path="/shuttleschedule" component={ShuttleSchedule} />
      <Route path="/shuttletimes" component={ShuttleTimes} />
      <Route path="/staff" component={StaffHome} />
      <Route path="/staffavailability" component={StaffAvailability} />
      <Route path="/staffclock" component={StaffClock} />
      <Route path="/staffschedule" component={StaffSchedule} />
    </Switch>
  </BrowserRouter>
);

export default Router;
