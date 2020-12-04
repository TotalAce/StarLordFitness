import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./style.css";
import Login from "./login.js";
import Signup from "./signup.js";
import ClientHome from "./clientside/clienthome";
import Landing from "./landing.js";
import Client from "./clientside/client";
import ClientCalender from "./clientside/clientcalender";
import ClientProfile from "./clientside/clientprofile";
import Trainer from "./trainerside/trainer";
import TrainerCalender from "./trainerside/trainercalender";
import TrainerProfile from "./trainerside/trainerprofile";
import TrainerSearch from "./trainerside/trainersearch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/client">
          <Client />
        </Route>
        <Route path="/clientcalender">
          <ClientCalender/>
        </Route>
        <Route path="/clienthome">
          <ClientHome />
        </Route>
        <Route path="/clientprofile">
          <ClientProfile />
        </Route>
        <Route path="/trainer">
          <Trainer />
        </Route>
        <Route path="/trainercalender">
          <TrainerCalender />
        </Route>
        <Route path="/trainerProfile">
          <TrainerProfile />
        </Route>
        <Route path="/trainersearch">
          <TrainerSearch />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
