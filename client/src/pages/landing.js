import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header'

function Landing() {
    return (
        <div style={{overflowX: "hidden"}}>
            <Header />
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