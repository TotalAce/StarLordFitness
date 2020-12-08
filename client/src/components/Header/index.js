import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";

function Header() {
    return (
        <div id="machli-header">
            <img alt="tiger" src={logo} width="65" height="65" />
            <h1 style={{color: "#fc7245"}}>Machli
            <br></br> <span style={{color: "#fc7245"}}>Fitness</span></h1>
        </div>
    );
}



export default Header;
