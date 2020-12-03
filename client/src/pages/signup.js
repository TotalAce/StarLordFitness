import React, { useState } from "react";

function Signup() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Login; User: ${userName}; Password: ${password}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="firstName">First Name:</label><br/>
            <input 
                type="text" 
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                /><br/>
            <label for="lastName">Last Name:</label><br/>
            <input 
                type="text" 
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                /><br/>
            <label for="email">Email:</label><br/>
            <input 
                type="text" 
                value={email}
                onChange={event => setEmail(event.target.value)}
                /><br/>
            <label for="username">Username:</label><br/>
            <input 
                type="text" 
                value={userName}
                onChange={event => setUserName(event.target.value)}
                /><br/>
            <label for="password">Password:</label><br/>
            <input 
                type="text" 
                value={password}
                onChange={event => setPassword(event.target.value)}
                /><br/>
            <input type="submit" value="Log In"/>
        </form>
    );
}

export default Signup;