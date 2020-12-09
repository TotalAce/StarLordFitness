import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/images/backgroundImg.jpg"
import Header from '../../components/Header';
import "../style.css"


function Landing() {
    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat', width: '100%', height: '100%', overflow: "hidden"
        }}>
            <div style={{ overflowX: "hidden" }}>

                <Header />
                <div class="container" style={{ justifyContent: "flex-start", alignItems: "center", display: "flex", marginLeft: "15%" }}>
                    <div class="row">
                        <div class="col-lg" style={{ background: "rgba(255, 255, 255, 0.6)", padding: "20px", width: "100%"}}>
                            <h2 style={{ padding: "2%"}}>Shape Your Mind &amp; Body</h2>

                            <h4 style={{ padding: "2%" }}>Leave nothing to chance. <br/>Leave nothing to Luck. <br/>Own it. <br/>You're writing your own story. <br/>Why not make it awesome?</h4>
                            <h1 style={{ fontWeight: "bold" }}><span style={{color: "#000070"}}>#STRIVE</span><span style={{color: "#fc7245"}}>4</span><span style={{color: "#000070"}}>GREATNESS!</span></h1>

                            <Link to="/login"><button type="button" className="btn btn-primary" style={{ margin: "5px" }}>Login</button></Link>
                           
                            <Link to="/signup"><button type="button" className="btn btn-primary" style={{ margin: "5px" }}>Signup</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Landing;