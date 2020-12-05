import React from "react";
import Navbar from "../../components/Navbar"
function Trainer() {


    return (
        <div className="container">
            <Navbar
                name1="trainercalender"
                to1="/trainercalender"
            />
            <h1 className="row justify-content-center">Trainer Home</h1>

            <div className="row">
                <div className="container col-6" style={{ backgroundColor: "gray", height: "400px" }}>Incomplete Workouts</div>

                <div className="container col-6" style={{ backgroundColor: "lightgray", height: "400px" }}>Completed Workouts</div>
            </div>

        </div>
    )
}


export default Trainer;
