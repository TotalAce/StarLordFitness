import React from "react";
import "./style.css";

function Login() {
    return (
        <form>
            <label for="email">Email:</label><br/>
            <input type="text" id="email"/><br/>
            <label for="password">Password:</label><br/>
            <input type="text" id="password"/>
            <input type="submit" value="login"/>
        </form>
    );
}

export default Login;