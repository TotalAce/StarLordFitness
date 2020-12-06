import React from "react";
import { Redirect } from "react-router-dom"
import { TrainerNavBar } from "../../components/Navbar"


function Trainer() {
    const { isLoggedIn, isTrainer } = JSON.parse(localStorage.getItem("user"))


    return (
        <>
            {(isLoggedIn === false ?
                <Redirect to="/login" /> :
                (isTrainer === false ? <Redirect to="/unauthorized" /> :

                    <div className="container">
                        <TrainerNavBar />
                        <h1>List of Clients</h1>
                    </div>

                )
            )}
        </>
    )
}


export default Trainer;
