import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
// import { TrainerProtectedRoutes, ClientProtectedRoutes } from "./ProtectedRoutes"
import { Unauthorized, NoMatch, Logout } from './misc'
import Login from "./login.js";
import Signup from "./signup.js";
import ClientHome from "./clientside/clienthome";
import Landing from "./landing.js";
import ClientProfile from "./clientside/clientprofile";
import ClientList from "./trainerside/clientlist";
import Trainer from "./trainerside/trainer";
import TrainerProfile from "./trainerside/trainerprofile";
import TrainerSearch from "./clientside/trainersearch";
import LoggedInContext from '../utils/loggedInContext'
// import API from '../utils/API'


function App() {

    console.log("version3");

    const [loggedInState, setLoggedInState] = useState({
        id: 0,
        username: "",
        firstName: "",
        lastName: "",
        isTrainer: null,
        isLoggedIn: null,
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

    // console.log("State", loggedInState);

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

                    {/* <Route exact path="/trainerProfile/" component={TrainerProfile} /> */}
                    <Route path="/trainerProfile/:id" component={TrainerProfile} />

                    <Route exact path="/trainersearch" component={TrainerSearch} />

                    <Route exact path="/" component={Landing} />

                    <Route component={NoMatch} />

                </Switch>
            </Router >

        </LoggedInContext.Provider>
    );
}

export default App;



// useEffect(() => {
//     API.checkLoggedIn()
//         .then(res => {
//             // console.log(res);

//             if (res.data === "") {
//                 setLoggedInState({ isLoggedIn: false })
//             }
//             else {
//                 setLoggedInState({
//                     id: res.data.id,
//                     username: res.data.username,
//                     firstName: res.data.firstName,
//                     lastName: res.data.lastName,
//                     isTrainer: res.data.isTrainer,
//                     isLoggedIn: true
//                 })
//             }
//         })
// }, [])

// setLoggedInState({ handleChange: handleChange })
<>
    {/* <ClientProtectedRoutes
                        path="/clienthome"
                        component={ClientHome}
                        errorComponent={Unauthorized}
                        isLoggedIn={loggedInState.isLoggedIn}
                        isTrainer={loggedInState.isTrainer}
                    />

                    <ClientProtectedRoutes
                        path="/clientcalendar"
                        component={ClientCalendar}
                        errorComponent={Unauthorized}
                        isLoggedIn={loggedInState.isLoggedIn}
                        isTrainer={loggedInState.isTrainer}
                    />

                    <ClientProtectedRoutes
                        path="/clientprofile"
                        component={ClientProfile}
                        errorComponent={Unauthorized}
                        isLoggedIn={loggedInState.isLoggedIn}
                        isTrainer={loggedInState.isTrainer}
                    />

                    <ClientProtectedRoutes
                        path="/trainersearch"
                        component={TrainerSearch}
                        errorComponent={Unauthorized}
                        isLoggedIn={loggedInState.isLoggedIn}
                        isTrainer={loggedInState.isTrainer}
                    />

                    <TrainerProtectedRoutes
                        path="/workouts"
                        component={Workout}
                        errorComponent={Unauthorized}
                        isLoggedIn={loggedInState.isLoggedIn}
                        isTrainer={loggedInState.isTrainer}
                    />

                    <TrainerProtectedRoutes
                        path="/trainer"
                        component={Trainer}
                        errorComponent={Unauthorized}
                        isLoggedIn={loggedInState.isLoggedIn}
                        isTrainer={loggedInState.isTrainer}
                    />

                    <TrainerProtectedRoutes
                        path="/trainercalendar"
                        component={TrainerCalendar}
                        errorComponent={Unauthorized}
                        isLoggedIn={loggedInState.isLoggedIn}
                        isTrainer={loggedInState.isTrainer}
                    />

                    <TrainerProtectedRoutes
                        path="/trainerProfile"
                        component={TrainerProfile}
                        errorComponent={Unauthorized}
                        isLoggedIn={loggedInState.isLoggedIn}
                        isTrainer={loggedInState.isTrainer}
                    />

                    <Route path="/logout">
                        <Logout />
                     */}
</>