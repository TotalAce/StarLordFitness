import React, { useState } from "react";
import NavBar from "../../components/Navbar"

function ClientHome() {

    const [note, setNote] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();

    };



    return (
        <>
            <NavBar
                name1="Workouts"
                name2="Trainer"
                to1=""
                to2=""
            />

            <h1 className="row justify-content-center">Workout of the Day</h1>



        </>
    )
}


export default ClientHome;
