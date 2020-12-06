import React from "react";
import { Redirect } from "react-router-dom"

function ClientWorkout() {
    const { isLoggedIn, isTrainer } = JSON.parse(localStorage.getItem("user"))


    return (
        <>
            {(isLoggedIn === false ?
                <Redirect to="/login" /> :
                (isTrainer === false ? <Redirect to="/unauthorized" /> :

                    <h1>ClientWorkout</h1>

                )
            )}
        </>
    )
}


export default ClientWorkout;
