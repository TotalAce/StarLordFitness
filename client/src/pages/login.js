import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import LoggedInContext from '../utils/loggedInContext'
import Header from '../components/Header'

function Login(props) {
    const { isTrainer, isLoggedIn } = useContext(LoggedInContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (userName === "" || password === "") {
            return alert("Please fill out all fields before submitting.")
        }

        axios.post("/api/login", {
            username: userName,
            password: password
        })
            .then(async function (response) {
                // console.log(response)

                if (response.statusText === "OK") {
                    // console.log(response);

                    axios.get("/api/user")
                        .then((res) => {
                            console.log(res);

                            (res.data.Clients.length === 0 ?
                                props.handleChange({
                                    id: res.data.id,
                                    username: res.data.username,
                                    firstName: res.data.firstName,
                                    lastName: res.data.lastName,
                                    isTrainer: res.data.isTrainer,
                                    isLoggedIn: true,
                                })
                                :
                                props.handleChange({
                                    id: res.data.id,
                                    username: res.data.username,
                                    firstName: res.data.firstName,
                                    lastName: res.data.lastName,
                                    isTrainer: res.data.isTrainer,
                                    isLoggedIn: true,
                                    Trainerid: res.data.Clients[0].TrainerId
                                })
                            )

                            // props.handleChange({
                            //     id: res.data.id,
                            //     username: res.data.username,
                            //     firstName: res.data.firstName,
                            //     lastName: res.data.lastName,
                            //     isTrainer: res.data.isTrainer,
                            //     isLoggedIn: true,
                            //     Trainerid: res.data.Clients[0].TrainerId
                            // })

                            // Each session only lasts 30 mins
                            setTimeout(() => {
                                localStorage.clear()
                                alert(`Your session has ended. Please login again`)
                                window.location.href = "/login"
                            }, 1000 * 60 * 30);


                            // (res.data.isTrainer === false ?
                            //     window.location.href = "/clienthome" :
                            //     window.location.href = "/trainer")

                            // res.data.isTrainer === false ?
                            //     <Redirect to="/clienthome" /> :
                            //     <Redirect to="/trainer" />
                        })
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("Wrong username and password combination")
            });
    }

    return (
        <>
            {(isLoggedIn ?
                (isTrainer ? <Redirect to="/trainer" /> : <Redirect to="/clienthome" />)
                : (
                    <>
                        <Header />
                        <h1>Login</h1>

                        <form onSubmit={handleSubmit}>
                            <input
                                autoFocus
                                style={{ margin: "5px 5px 0 5px" }}
                                type="text"
                                value={userName}
                                placeholder="Username"
                                onChange={event => setUserName(event.target.value)}
                            />
                            <br />
                            <input
                                style={{ margin: "5px" }}
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={event => setPassword(event.target.value)}
                            /><br />
                            <input type="submit" value="Log In" />
                        </form>

                        <br />
                        <h6>
                            <a href="/signup">I don't have a login</a>
                        </h6>
                    </>
                )
            )}
        </>
    );
}

export default Login;