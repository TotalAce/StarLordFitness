import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import LoggedInContext from '../utils/loggedInContext'

function Login(props) {
    const { id, username, firstName, lastName, isTrainer, isLoggedIn } = useContext(LoggedInContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function handleChange(data) {
        // Here, we invoke the callback with the new value
        await props.handleChange(data);
    }

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
                // console.log(response.status)
                if (response.status === 200) {
                    console.log(response);

                    axios.get("/api/user")
                        .then((res) => {
                            // console.log(res);
                            // console.log(res.data.isTrainer);
                            handleChange({
                                id: res.data.id,
                                username: res.data.username,
                                firstName: res.data.firstName,
                                lastName: res.data.lastName,
                                isTrainer: res.data.isTrainer,
                                isLoggedIn: true
                            })
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

    console.log(isLoggedIn);
    console.log(isTrainer);



    return (
        <>
            {(isLoggedIn ?
                (isTrainer ? <Redirect to="/trainer" /> : <Redirect to="/clienthome" />)
                : (
                    <div className="container" style={{ padding: "10%" }}>
                        <h1 style={{ fontSize: "100px" }}>Machli Fitness</h1>
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

                    </div>
                )
            )}
        </>
    );
}

export default Login;