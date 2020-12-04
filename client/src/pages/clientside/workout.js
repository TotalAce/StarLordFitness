import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar"
import API from "../../utils/API"
import axios from "axios"
import moment from "moment"
// import { Route, Redirect } from "react-router-dom";

function ClientHome() {

    // const [note, setNote] = useState("")
    // const [completed, setCompleted] = useState(false)
    // const [workout, setWorkout] = useState([])
    // const [id, setId] = useState(1)
    // const [submitted, setSubmitted] = useState(false)

    const date = moment().format('YYYY-MM-DD')

    // useEffect(() => {
    //     axios.get("/api/user")
    //         .then((res) => {
    //             console.log(res.data);
    //             setId(res.data.id)
    //             if (!res.data) {
    //                 window.location.href = "/login"
    //             }
    //             loadWorkouts()
    //         })
    //         .catch(err => console.log(err));
    // }, [])

    // // console.log(workout);

    // function loadWorkouts() {
    //     API.getClientWorkoutPlan()
    //         .then(res => {
    //             console.log(res.data);
    //             setWorkout(res.data)

    //         })
    //         .catch(err => console.log(err));
    // }

    // function handleInputChange(event) {
    //     const { value } = event.target;
    //     setNote(value)
    // };

    // console.log(note);

    // function handleFormSubmit(event) {
    //     event.preventDefault();

    //     API.addNotes({
    //         date: date,
    //         note: note,
    //         completed: completed,
    //         UserId: id
    //     })
    //         .then((res) => {
    //             alert("Workout Submitted!")
    //             setSubmitted(true)
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // };

    // function handleButtonClick() {
    //     if (completed === false) {
    //         setCompleted(true)
    //     } else if (completed === true) {
    //         setCompleted(false)
    //     }
    // }

    // const todaysWorkout = workout.filter(workout => workout.date > date)
    // console.log(todaysWorkout);

    return (
        <>
            <NavBar
                name1="Workouts"
                name2="Trainer"
                to1=""
                to2=""
            />

            <h1>WORKOUT PAGE</h1>
        </>
    )
}


export default ClientHome;
