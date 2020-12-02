import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./style.css";
import Login from "./login.js";
import Signup from "./signup.js";
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
            <Route path="/">
                <Landing />
            </Route>
        </Switch>
    </Router>
  );
}


export default App;
