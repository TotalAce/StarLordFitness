import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/images/backgroundImg.jpg"
import Header from '../components/Header';
import "./style.css"


function Landing() {
    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat', width: '100%', height: '100%', overflow: "hidden"
        }}>
            <div style={{ overflowX: "hidden" }}>

                <Header />
                <div class="container-fluid" style={{ justifyContent: "flex-start", alignItems: "center", display: "flex", marginLeft: "15%" }}>
                    <div class="row">
                        <div class="col-5">
                            <h2 style={{ color: "white", padding: "2%", marginTop: "15%", fontFamily: "serif" }}>Shape Your Mind &amp; Body</h2>

                            <h4 style={{ color: "white", padding: "2%", fontFamily: "serif" }}>Leave nothing to chance. Leave nothing to Luck. Own it. You're writing your own story. Why not make it awesome?</h4>
                            <h1 style={{ color: "white", fontFamily: "serif", fontWeight: "bold" }}><span style={{color: "red"}}>#STRIVE</span><span style={{color: "blue"}}>4</span><span style={{color: "red"}}>MOUA!</span></h1>

                            <Link to="/login"><button type="button" className="btn btn-primary" style={{ margin: "5px", border: "2px solid white" }}>Login</button></Link>
                           
                            <Link to="/signup"><button type="button" className="btn btn-secondary" style={{ margin: "5px", border: "2px solid white" }}>Signup</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Landing;