import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import { Unauthorized, NoMatch, Logout } from './misc/misc'
import Login from "./misc/login.js";
import Signup from "./misc/signup.js";
import ClientHome from "./clientside/clienthome";
import Landing from "./misc/landing.js";
import ClientProfile from "./clientside/clientprofile";
import ClientList from "./trainerside/clientlist";
import Trainer from "./trainerside/trainer";
import TrainerProfile from "./trainerside/trainerprofile";
import TrainerSearch from "./clientside/trainersearch";
import LoggedInContext from '../utils/loggedInContext'
import Chat from "./misc/chat"

function App() {

    const [loggedInState, setLoggedInState] = useState({
        id: 0,
        username: "",
        firstName: "",
        lastName: "",
        isTrainer: null,
        isLoggedIn: false,
    })

    useEffect(() => {
        if (loggedInState.id === 0) {
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {
                const foundUser = JSON.parse(loggedInUser);
                setLoggedInState(foundUser);
            }
        }
    }, [loggedInState.id]);

    function handleChange(status) {
        localStorage.setItem("user", JSON.stringify(status))
        setLoggedInState(JSON.parse(localStorage.getItem("user")))
    }

    return (
        <LoggedInContext.Provider value={loggedInState}>
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login handleChange={handleChange} />
                    </Route>

                    <Route exact path="/signup" component={Signup} />

                    <Route exact path="/logout" component={Logout} />

                    <Route exact path="/unauthorized" component={Unauthorized} />

                    <Route exact path="/clienthome" component={ClientHome} />

                    <Route exact path="/clientprofile/:id" component={ClientProfile} />

                    <Route exact path="/clientlist" component={ClientList} />

                    <Route exact path="/trainer" component={Trainer} />

                    <Route path="/trainerProfile/:id" component={TrainerProfile} />

                    <Route exact path="/trainersearch" component={TrainerSearch} />

                    <Route exact path="/chat" component={Chat} />

                    <Route exact path="/" component={Landing} />

                    <Route component={NoMatch} />

                </Switch>
            </Router >

        </LoggedInContext.Provider>
    );
}

export default App;