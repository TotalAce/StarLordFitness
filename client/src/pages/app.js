import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import { TrainerProtectedRoutes, ClientProtectedRoutes } from "./ProtectedRoutes"
import { Unauthorized } from './misc'
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
import TrainerSearch from "./clientside/trainersearch";
import API from '../utils/API'
import LoggedInContext from '../utils/loggedInContext'


function App() {

    const [loggedInState, setLoggedInState] = useState({
        id: 0,
        username: "",
        firstName: "",
        lastName: "",
        isTrainer: null,
        isLoggedIn: null,
    })

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

    console.log("istrainer: ", loggedInState.isTrainer);
    console.log("isloggedin: ", loggedInState.isLoggedIn);

    function handleChange(status) {
        setLoggedInState(status);
        console.log(status);
    }

    console.log("State", loggedInState);



    return (
        <LoggedInContext.Provider value={loggedInState}>

            <Router>
                <Switch>

                    <Route path="/login">
                        <Login
                            handleChange={handleChange}
                        />

                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>

                    <ClientProtectedRoutes
                        path="/clienthome"
                        component={ClientHome}
                        errorComponent={Unauthorized}
                        isLoggedIn={loggedInState.isLoggedIn}
                        isTrainer={loggedInState.isTrainer}
                    // isLoggedIn={true}
                    // isTrainer={false}
                    />

                    <Route path="/clientcalender">
                        <ClientCalender />
                    </Route>
                    {/* <Route path="/clienthome">
                    <ClientHome />
                </Route> */}
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
            </Router >

        </LoggedInContext.Provider>
    );
}


export default App;
