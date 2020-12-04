import React from "react";
import NavBar from "../../components/Navbar"

function ClientProfile() {


    return (
        <div className="container">
            <br></br>
            <NavBar />
            <br></br>
            <h2 className="d-flex justify-content-center"> Client Name</h2>
            <br></br>
            <div className="img-container d-flex justify-content-center">
                <p>Insert Client Image</p>
            </div>
            <br></br>
            <div className="d-flex justify-content-center">
                <p>Client Summary</p>
            </div>
        </div>
    )
}


export default ClientProfile;
