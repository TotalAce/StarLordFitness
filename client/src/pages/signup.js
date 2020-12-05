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
    const [isTrainer, setTrainer] = useState(false);
    let success = false;


    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        if(userName === "" || password === "" || firstName === "" || lastName === "" || email === "") {
            return alert("Please fill out all fields before submitting.")
        }
        if (password !== passwordConfirm) {
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
        .then(function (response) {
            console.log(response)
            if (response.status === 200) {
                success = true;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    if (success) {
        return <Redirect to="/"/>;
    }

    return (
        <div className="container" style={{textAlign:"center"}}>
        <h1>Machli Fitness</h1>
        <h1>Signup</h1>
        <br/>
        <form onSubmit={handleSubmit}>
            <input
                type="checkbox"
                value={isTrainer}
                onChange={event => setTrainer(event.target.value)}/>
            <label htmlFor="isTrainer">I am a Trainer</label><br/>
            <label htmlFor="firstName">First Name:</label><br/>
            <input 
                type="text" 
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                /><br/>
            <label htmlFor="lastName">Last Name:</label><br/>
            <input 
                type="text" 
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                /><br/>
            <label htmlFor="email">Email:</label><br/>
            <input 
                type="text" 
                value={email}
                onChange={event => setEmail(event.target.value)}
                /><br/>
            <label htmlFor="username">Username:</label><br/>
            <input 
                type="text" 
                value={userName}
                onChange={event => setUserName(event.target.value)}
                /><br/>
            <label htmlFor="password">Password:</label><br/>
            <input 
                type="password" 
                value={password}
                onChange={event => setPassword(event.target.value)}
                /><br/>
            <label htmlFor="password">Confirm Password:</label><br/>
            <input 
                type="password" 
                value={passwordConfirm}
                onChange={event => setPasswordConfirm(event.target.value)}
                /><br/>
            <input type="submit" value="Log In"/>
        </form>

        <br/>
        <h2><a href="/login">I have a login</a></h2>
        </div>
    );
}

export default Signup;