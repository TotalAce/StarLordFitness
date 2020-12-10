import React, { useEffect } from "react";
import axios from "axios"
import Background from "../../assets/images/backgroundImg.jpg"
import Header from '../../components/Header';
import "../style.css"


function Unauthorized() {
    return (
        <>
            <h1>Error 403</h1>
            <h2>You are not allowed in the tigers den</h2>
            <h2>Turn back now!</h2>
        </>
    )
}

function NoMatch() {
    return (
        <>
            <h1>Error 404</h1>
            <h2>You are headed towards the belly of the beast</h2>
            <h2>Turn back now!</h2>
        </>
    )
}

function Logout() {

    useEffect((res, req) => {
        axios.get("/api/logout")
            .then((data) => {
                localStorage.clear()
                // console.log(data);
            })
            .catch(err => console.log(err))
    })

    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat', width: '100%', height: '100%', overflow: "hidden"
        }}>
            <div style={{ overflowX: "hidden" }}>

                <Header />
                <div className="container-fluid" style={{ justifyContent: "flex-start", alignItems: "center", display: "flex", marginLeft: "15%" }}>
                    <div className="row">
                        <div className="col-lg" style={{ background: "rgba(255, 255, 255, 0.6)", padding: "20px"}}>
                            <h2 style={{ padding: "2%"}}>Shape Your Mind &amp; Body</h2>

                            <h4 style={{ padding: "2%" }}>Leave nothing to chance. <br/>Leave nothing to Luck. <br/>Own it. <br/>You're writing your own story. <br/>Why not make it awesome?</h4>
                            <h1 style={{ fontWeight: "bold" }}><span style={{color: "#000070"}}>#STRIVE</span><span style={{color: "#fc7245"}}>4</span><span style={{color: "#000070"}}>GREATNESS!</span></h1>

                            <a href="/login"><button type="button" className="btn btn-primary" style={{ margin: "5px" }}>Login</button></a>
                           
                            <a href="/signup"><button type="button" className="btn btn-primary" style={{ margin: "5px" }}>Signup</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export { Unauthorized, NoMatch, Logout}
