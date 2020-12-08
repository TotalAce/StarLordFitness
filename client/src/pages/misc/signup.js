import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header"

function Signup() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isTrainer, setTrainer] = useState();

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // console.log(validateEmail(email))

    async function handleSubmit(evt) {
        evt.preventDefault();

        if (!userName || !password || !firstName || !lastName || !email || isTrainer === undefined) {
            return alert("Please fill out all fields before submitting.")
        } else if (validateEmail(email) !== true) {
            return alert("Please enter a valid email address.")
        } else if (password !== passwordConfirm) {
            return alert("Password does not match password confirmation.")
        }

        await axios.post("/api/signup",
            {
                username: userName,
                email: email,
                password: password,
                isTrainer: isTrainer,
                firstName: capitalizeFirstLetter(firstName),
                lastName: capitalizeFirstLetter(lastName)
            })
            .then(async function (res) {
                console.log(res);
                console.log(res.data.hasOwnProperty('errors'));
                console.log("is trainer?", res.data.isTrainer);

                if (res.data.hasOwnProperty('errors') === true) {
                    alert(`Field ${res.data.errors[0].message}`)
                }

                await (res.data.isTrainer === true ?

                    axios.post("/api/trainer/signup", {
                        username: userName,
                        firstName: firstName,
                        lastName: lastName,
                        UserId: res.data.id
                    })
                    .then(res =>{
                        console.log(res)
                        alert(`Trainer profile ${userName} has been created. Please login with this information`)
                        window.location.href = "/login"
                    } )
                        .catch(err => console.log(err))


                    :

                    axios.post("/api/client/signup", {
                        username: userName,
                        firstName: firstName,
                        lastName: lastName,
                        UserId: res.data.id
                    })
                        .then(res =>{
                            console.log(res)
                            alert(`Client profile ${userName} has been created. Please login with this information`)
                            window.location.href = "/login"
                        } )
                        .catch(err => console.log(err))

                ).catch(err => console.log(err))
            })

            .catch(err => console.log(err))
    }

    return (
        <>
            <Header />
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
        </>
    );
}

export default Signup;