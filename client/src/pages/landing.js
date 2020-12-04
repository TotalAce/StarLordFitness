import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Machli Fitness</h1>
            <p>Earn Your Stripes!</p>
            <Link to="/login">Log In</Link>
            <br/>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default Login;