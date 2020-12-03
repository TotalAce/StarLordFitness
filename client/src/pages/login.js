import React, { useState } from "react";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Login; User: ${userName}; Password: ${password}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="email">Username:</label><br/>
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

export default Login;