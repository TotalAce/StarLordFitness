import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./style.css";

function Login() {
    return (
        <div>
            <h1>Starlord/Tiger Fitness</h1>
            <p>Earn Your Stripes!</p>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default Login;