import LandingPage from "./Pages/LandingPage";
import Payment from "./Pages/EcommercePage/Payment";
import './Style/global.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/ecommercePayment">
          <Payment />
        </Route>
      </Switch>
    </Router>
  );
}
