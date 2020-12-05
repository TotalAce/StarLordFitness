import React, { useState } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";

function Login() {
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
            .then(function (response) {
                console.log(response.status)
                if (response.status === 200) {
                    console.log(response);

                    axios.get("/api/user")
                        .then((res) => {
                            console.log(res.data.isTrainer);
                            (res.data.isTrainer === false ?
                                window.location.href = "/clienthome" :
                                window.location.href = "/trainer")
                        })
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("Wrong username and password combination")
            });
    }

    return (
        <div className="container" style={{ padding: "15%" }}>
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
    );
}

export default Login;