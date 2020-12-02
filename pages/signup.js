import React from "react";
import "./style.css";

function Signup() {
    return (
        <form>
            <label for="email">First Name:</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label for="password">Last Name:</label><br/>
            <input type="text" id="lname" name="lname"/>
            <label for="email">Email:</label><br/>
            <input type="text" id="email"/><br/>
            <label for="password">Password:</label><br/>
            <input type="text" id="password"/>
            <input type="submit" value="signup"/>
        </form>
    );
}

export default Signup;