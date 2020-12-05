import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="navbar-brand">
                <img src="https://via.placeholder.com/150" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                    Machli Fitness
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fl" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link className="nav-link" to={props.to1} >{props.name1}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={props.to2} >{props.name2}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout" >Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
