import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
import Logout from "../../assets/images/logout.png"
import "./style.css";

function ClientNavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="navbar-brand">
                <img src={Logo} className="d-inline-block align-top" alt="" loading="lazy" />
                <span id="machli">Machli Fitness</span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fl" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/clientcalendar" >Calendar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/trainerprofile" >Trainer</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout" ><img className="logout" src={Logout} alt="logout" /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function TrainerNavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="navbar-brand">
                <img src={Logo} className="d-inline-block align-top" alt="" loading="lazy" />
                <span id="machli">Machli Fitness</span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fl" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/workout" >Workouts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/clientlist" >Clients</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout" ><img className="logout" src={Logout} alt="logout" /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { ClientNavBar, TrainerNavBar };
