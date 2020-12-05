import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="container" style={{ padding: "10%" }}>
            <h1 style={{ fontSize: "100px" }}>Machli Fitness</h1>
            <h3>Earn Your Stripes!</h3>

            <div className="row justify-content-center">
                <Link to="/login"><button type="button" className="btn btn-primary" style={{ margin: "5px" }}>Login</button></Link>
                <br />
                <Link to="/signup"><button type="button" className="btn btn-secondary" style={{ margin: "5px" }}>Signup</button></Link>
            </div>
        </div>
    );
}

export default Landing;