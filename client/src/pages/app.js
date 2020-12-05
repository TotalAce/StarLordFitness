import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import Login from "./login.js";
import Logout from "./logout.js";
import Signup from "./signup.js";
import ClientHome from "./clientside/clienthome";
import Landing from "./landing.js";
import ClientCalender from "./clientside/clientcalender";
import ClientProfile from "./clientside/clientprofile";
import Workout from "./trainerside/workout";
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
                <Route path="/clientcalender">
                    <ClientCalender />
                </Route>
                <Route path="/clienthome">
                    <ClientHome />
                </Route>
                <Route path="/clientprofile">
                    <ClientProfile />
                </Route>
                <Route path="/workouts">
                    <Workout />
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
                <Route path="/logout">
                    <Logout />
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    );
}


export default App;
