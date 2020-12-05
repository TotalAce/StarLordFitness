import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Signup() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isTrainer, setTrainer] = useState();
    let success = false;

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // console.log(validateEmail(email))

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!userName || !password || !firstName || !lastName || !email || isTrainer === undefined) {
            return alert("Please fill out all fields before submitting.")
        } else if (validateEmail(email) !== true) {
            return alert("Please enter a valid email address.")
        } else if (password !== passwordConfirm) {
            return alert("Password does not match password confirmation.")
        }

        axios.post("/api/signup", {
            username: userName,
            email: email,
            password: password,
            isTrainer: isTrainer,
            firstName: firstName,
            lastName: lastName
        })
            .then(function (res) {
                console.log(res)
                alert(`Field ${res.data.errors[0].message}`)

                // if (response.status === 200) {
                //     success = true;
                // }
            })
            .catch(function (err) {
                // console.log(err);
                if (err !== undefined) {
                    alert(`Field ${err.data.errors[0].message}`)
                }
            });
    }

    if (success) {
        return <Redirect to="/" />;
    }

    return (
        <div className="container" style={{ padding: "5%" }}>
            <h1 style={{ fontSize: "100px" }}>Machli Fitness</h1>
            <h1>Signup</h1>
            <br />

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label><br />
                <input
                    autoFocus
                    type="text"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                />
                <br />
                <label htmlFor="lastName">Last Name:</label><br />
                <input
                    type="text"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                />
                <br />
                <label htmlFor="email">Email:</label><br />
                <input
                    type="text"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <br />
                <label htmlFor="username">Username:</label><br />
                <input
                    type="text"
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                />
                <br />
                <label htmlFor="password">Password:</label><br />
                <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <br />
                <label htmlFor="password">Confirm Password:</label><br />
                <input
                    type="password"
                    value={passwordConfirm}
                    onChange={event => setPasswordConfirm(event.target.value)}
                />
                <br />
                <br />
                <div className="custom-control custom-radio">
                    <input type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="custom-control-input"
                        value={false}
                        onChange={event => setTrainer(event.target.value)}
                    />
                    <label className="custom-control-label" htmlFor="customRadio1">
                        I am a Client
                    </label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio"
                        id="customRadio2"
                        name="customRadio"
                        className="custom-control-input"
                        value={true}
                        onChange={event => setTrainer(event.target.value)} />
                    <label className="custom-control-label" htmlFor="customRadio2">
                        I am a Trainer
                    </label>
                </div>
                <br />

                <input type="submit" value="Signup" />
            </form>

            <br />
            <h6><a href="/login">I have a login</a></h6>
        </div>
    );
}

export default Signup;