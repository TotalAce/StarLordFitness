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
            <Route path="/clienthome">
                <ClientHome />
            </Route>
            <Route path="/">
                <Landing />
            </Route>
        </Switch>
    </Router>
  );
}


export default App;
