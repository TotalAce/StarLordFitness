import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";

function Header() {
    return (
        <div id="machli-header">
            <img alt="tiger" src={logo} width="120" height="120" />
            <h1>Machli Fitness</h1>
        </div>
    );
}



export default Header;
