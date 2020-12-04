import React from "react";
import NavBar from "../../components/Navbar";

function TrainerProfile() {


    return (
        <div className="container">
            <br></br>
            <NavBar />
            <br></br>
            <h2 className="d-flex justify-content-center"> Trainer Name</h2>
            <br></br>
            <div className="img-container d-flex justify-content-center">
                <p>Insert Trainer Image</p>
            </div>
            <br></br>
            <div className="d-flex justify-content-center">
                <p>Trainer Summary</p>
            </div>
        </div>
    )
}


export default TrainerProfile;
