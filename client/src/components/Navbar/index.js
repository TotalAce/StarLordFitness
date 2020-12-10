import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
import Logout from "../../assets/images/logout.png"
import "./style.css";

function ClientNavBar() {

    const { Trainerid, username, id } = JSON.parse(localStorage.getItem("user")) || ""

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <Link className="navbar-brand" to="/clienthome">
                <img src={Logo} alt="" width="30" height="24" className="d-inline-block align-top" />
                <span> Machli Fitness</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fl" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link className="nav-link" to={`/clientprofile/${username}?UserId=${id}`} >My Profile</Link>
                    </li>
                    {(Trainerid === null ?
                        null
                        :
                        < li className="nav-item">
                            <Link className="nav-link" to={`/trainerprofile/${Trainerid}`} >My Trainer</Link>
                        </li>
                    )}
                    <li className="nav-item">
                        <Link className="nav-link" to={`/trainersearch`}>Search for a Trainer</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/chat`}>Chat</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout" ><img className="logout" src={Logout} alt="logout" /></Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

function TrainerNavBar() {

    const { id } = JSON.parse(localStorage.getItem("user")) || ""

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <Link className="navbar-brand" to="/trainer">
                <img src={Logo} alt="" width="30" height="24" className="d-inline-block align-top" />
                <span>Machli Fitness</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fl" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link className="nav-link" to={`/trainerprofile/${id}`} >My Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/clientlist" >My Clients</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/chat`}>Chat</Link>
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
